"use server";

import { db } from "@/lib/db/drizzle";
import { country } from "@/lib/db/schema/academy-schema";

export type Country = {
    id: string;
    nameEn: string;
    nameAr: string;
    code: string;
    timezone: string;
};

export type GetCountriesResult = {
    countries: Country[];
    hasMore: boolean;
};

export async function getCountries(
    page: number = 1,
    limit: number = 15
): Promise<GetCountriesResult> {
    const offset = (page - 1) * limit;

    const countries = await db
        .select()
        .from(country)
        .limit(limit + 1) // Fetch one extra to check if there are more
        .offset(offset);

    const hasMore = countries.length > limit;

    return {
        countries: hasMore ? countries.slice(0, limit) : countries,
        hasMore,
    };
}
