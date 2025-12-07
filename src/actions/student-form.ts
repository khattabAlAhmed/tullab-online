"use server";

import { db } from "@/lib/db/drizzle";
import { student, country, university } from "@/lib/db/schema/academy-schema";
import { eq, asc } from "drizzle-orm";
import { nanoid } from "@/lib/utils";

// Types
export type CountryOption = {
    id: string;
    nameEn: string;
    nameAr: string;
};

export type UniversityOption = {
    id: string;
    nameEn: string;
    nameAr: string;
    logoUrl: string | null;
};

export type CreateStudentData = {
    name: string;
    phoneNumber?: string;
    telegramUser?: string;
    nationalityId: string;
    studyIn: string;
    universityId?: string;
};

// Get all countries for dropdown (sorted by name)
export async function getAllCountriesForSelect(): Promise<CountryOption[]> {
    const countries = await db
        .select({
            id: country.id,
            nameEn: country.nameEn,
            nameAr: country.nameAr,
        })
        .from(country)
        .orderBy(asc(country.nameEn));

    return countries;
}

// Get universities by country ID for dropdown
export async function getUniversitiesByCountry(countryId: string): Promise<UniversityOption[]> {
    if (!countryId) return [];

    const universities = await db
        .select({
            id: university.id,
            nameEn: university.nameEn,
            nameAr: university.nameAr,
            logoUrl: university.logoUrl,
        })
        .from(university)
        .where(eq(university.countryId, countryId))
        .orderBy(asc(university.nameEn));

    return universities;
}

// Create new student
export async function createStudent(data: CreateStudentData): Promise<{ success: boolean; error?: string; studentId?: string }> {
    try {
        const id = nanoid();

        await db.insert(student).values({
            id,
            name: data.name,
            phoneNumber: data.phoneNumber || null,
            telegramUser: data.telegramUser || null,
            nationalityId: data.nationalityId,
            studyIn: data.studyIn,
            universityId: data.universityId || null,
        });

        return { success: true, studentId: id };
    } catch (error) {
        console.error("Error creating student:", error);
        return { success: false, error: "Failed to create student" };
    }
}
