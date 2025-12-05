"use server";

import { db } from "@/lib/db/drizzle";
import { university, country } from "@/lib/db/schema/academy-schema";
import { eq, asc } from "drizzle-orm";

export type University = {
    id: string;
    nameEn: string;
    nameAr: string;
    logoUrl: string | null;
    countryId: string;
    countryNameEn: string;
    countryNameAr: string;
};

export type SortBy = "name" | "country";

export type GetUniversitiesResult = {
    universities: University[];
    hasMore: boolean;
};

export async function getUniversities(
    page: number = 1,
    limit: number = 15,
    sortBy: SortBy = "name"
): Promise<GetUniversitiesResult> {
    const offset = (page - 1) * limit;

    const orderByColumn = sortBy === "country"
        ? asc(country.nameEn)
        : asc(university.nameEn);

    const result = await db
        .select({
            id: university.id,
            nameEn: university.nameEn,
            nameAr: university.nameAr,
            logoUrl: university.logoUrl,
            countryId: university.countryId,
            countryNameEn: country.nameEn,
            countryNameAr: country.nameAr,
        })
        .from(university)
        .leftJoin(country, eq(university.countryId, country.id))
        .orderBy(orderByColumn)
        .limit(limit + 1)
        .offset(offset);

    const hasMore = result.length > limit;

    const universities: University[] = (hasMore ? result.slice(0, limit) : result).map((u) => ({
        id: u.id,
        nameEn: u.nameEn,
        nameAr: u.nameAr,
        logoUrl: u.logoUrl,
        countryId: u.countryId,
        countryNameEn: u.countryNameEn ?? "",
        countryNameAr: u.countryNameAr ?? "",
    }));

    return {
        universities,
        hasMore,
    };
}
