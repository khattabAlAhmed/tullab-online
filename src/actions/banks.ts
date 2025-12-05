"use server";

import { db } from "@/lib/db/drizzle";
import { bank, country } from "@/lib/db/schema/academy-schema";
import { eq } from "drizzle-orm";

export type Bank = {
    id: string;
    nameEn: string;
    nameAr: string;
    logo: string | null;
    countryId: string;
    countryNameEn: string;
    countryNameAr: string;
};

export type GetBanksResult = {
    banks: Bank[];
    hasMore: boolean;
};

export async function getBanks(
    page: number = 1,
    limit: number = 15
): Promise<GetBanksResult> {
    const offset = (page - 1) * limit;

    const result = await db
        .select({
            id: bank.id,
            nameEn: bank.nameEn,
            nameAr: bank.nameAr,
            logo: bank.logo,
            countryId: bank.countryId,
            countryNameEn: country.nameEn,
            countryNameAr: country.nameAr,
        })
        .from(bank)
        .leftJoin(country, eq(bank.countryId, country.id))
        .limit(limit + 1)
        .offset(offset);

    const hasMore = result.length > limit;

    const banks: Bank[] = (hasMore ? result.slice(0, limit) : result).map((b) => ({
        id: b.id,
        nameEn: b.nameEn,
        nameAr: b.nameAr,
        logo: b.logo,
        countryId: b.countryId,
        countryNameEn: b.countryNameEn ?? "",
        countryNameAr: b.countryNameAr ?? "",
    }));

    return {
        banks,
        hasMore,
    };
}
