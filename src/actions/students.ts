"use server";

import { db } from "@/lib/db/drizzle";
import { student, country } from "@/lib/db/schema/academy-schema";
import { eq, asc } from "drizzle-orm";
import { sql } from "drizzle-orm";

export type Student = {
    id: string;
    name: string;
    phoneNumber: string | null;
    telegramUser: string | null;
    nationalityNameEn: string;
    nationalityNameAr: string;
    studyInNameEn: string;
    studyInNameAr: string;
};

export type StudentSortBy = "name" | "nationality" | "studyIn";

export type GetStudentsResult = {
    students: Student[];
    hasMore: boolean;
};

// Aliases for the country table
const nationalityCountry = db.$with("nationality_country").as(
    db.select().from(country)
);
const studyInCountry = db.$with("study_in_country").as(
    db.select().from(country)
);

export async function getStudents(
    page: number = 1,
    limit: number = 15,
    sortBy: StudentSortBy = "name"
): Promise<GetStudentsResult> {
    const offset = (page - 1) * limit;

    // Using raw SQL for aliases since drizzle doesn't support multiple joins to the same table easily
    const result = await db.execute(sql`
        SELECT 
            s.id,
            s.name,
            s.phone_number as "phoneNumber",
            s.telegram_user as "telegramUser",
            nc.name_en as "nationalityNameEn",
            nc.name_ar as "nationalityNameAr",
            sc.name_en as "studyInNameEn",
            sc.name_ar as "studyInNameAr"
        FROM student s
        LEFT JOIN country nc ON s.nationality_id = nc.id
        LEFT JOIN country sc ON s.study_in = sc.id
        ORDER BY ${sortBy === "nationality" ? sql`nc.name_en` : sortBy === "studyIn" ? sql`sc.name_en` : sql`s.name`} ASC
        LIMIT ${limit + 1}
        OFFSET ${offset}
    `);

    const rows = result.rows as Student[];
    const hasMore = rows.length > limit;

    const students: Student[] = (hasMore ? rows.slice(0, limit) : rows).map((s) => ({
        id: s.id,
        name: s.name,
        phoneNumber: s.phoneNumber,
        telegramUser: s.telegramUser,
        nationalityNameEn: s.nationalityNameEn ?? "",
        nationalityNameAr: s.nationalityNameAr ?? "",
        studyInNameEn: s.studyInNameEn ?? "",
        studyInNameAr: s.studyInNameAr ?? "",
    }));

    return {
        students,
        hasMore,
    };
}
