"use server";

import { db } from "@/lib/db/drizzle";
import { specialist, specialty } from "@/lib/db/schema/academy-schema";
import { eq, asc } from "drizzle-orm";

export type Specialist = {
    id: string;
    nameEn: string;
    nameAr: string;
    specialtyTitleEn: string;
    specialtyTitleAr: string;
};

export type SpecialistSortBy = "name" | "specialty";

export type GetSpecialistsResult = {
    specialists: Specialist[];
    hasMore: boolean;
};

export async function getSpecialists(
    page: number = 1,
    limit: number = 15,
    sortBy: SpecialistSortBy = "name"
): Promise<GetSpecialistsResult> {
    const offset = (page - 1) * limit;

    const orderByColumn = sortBy === "specialty"
        ? asc(specialty.titleEn)
        : asc(specialist.nameEn);

    const result = await db
        .select({
            id: specialist.id,
            nameEn: specialist.nameEn,
            nameAr: specialist.nameAr,
            specialtyTitleEn: specialty.titleEn,
            specialtyTitleAr: specialty.titleAr,
        })
        .from(specialist)
        .leftJoin(specialty, eq(specialist.specialtyId, specialty.id))
        .orderBy(orderByColumn)
        .limit(limit + 1)
        .offset(offset);

    const hasMore = result.length > limit;

    const specialists: Specialist[] = (hasMore ? result.slice(0, limit) : result).map((s) => ({
        id: s.id,
        nameEn: s.nameEn,
        nameAr: s.nameAr,
        specialtyTitleEn: s.specialtyTitleEn ?? "",
        specialtyTitleAr: s.specialtyTitleAr ?? "",
    }));

    return {
        specialists,
        hasMore,
    };
}
