"use server";

import { db } from "@/lib/db/drizzle";
import { project, projectType, student, specialist } from "@/lib/db/schema/academy-schema";
import { eq, asc, desc } from "drizzle-orm";

export type Project = {
    id: string;
    price: string;
    deadline: Date | null;
    deliveredAt: Date | null;
    projectTypeEn: string;
    projectTypeAr: string;
    studentName: string;
    specialistNameEn: string | null;
    specialistNameAr: string | null;
};

export type ProjectSortBy = "deadline" | "price" | "type";

export type GetProjectsResult = {
    projects: Project[];
    hasMore: boolean;
};

export async function getProjects(
    page: number = 1,
    limit: number = 15,
    sortBy: ProjectSortBy = "deadline"
): Promise<GetProjectsResult> {
    const offset = (page - 1) * limit;

    let orderByColumn;
    switch (sortBy) {
        case "price":
            orderByColumn = desc(project.price);
            break;
        case "type":
            orderByColumn = asc(projectType.typeEn);
            break;
        case "deadline":
        default:
            orderByColumn = desc(project.deadline);
            break;
    }

    const result = await db
        .select({
            id: project.id,
            price: project.price,
            deadline: project.deadline,
            deliveredAt: project.deliveredAt,
            projectTypeEn: projectType.typeEn,
            projectTypeAr: projectType.typeAr,
            studentName: student.name,
            specialistNameEn: specialist.nameEn,
            specialistNameAr: specialist.nameAr,
        })
        .from(project)
        .leftJoin(projectType, eq(project.projectTypeId, projectType.id))
        .leftJoin(student, eq(project.studentId, student.id))
        .leftJoin(specialist, eq(project.specialistId, specialist.id))
        .orderBy(orderByColumn)
        .limit(limit + 1)
        .offset(offset);

    const hasMore = result.length > limit;

    const projects: Project[] = (hasMore ? result.slice(0, limit) : result).map((p) => ({
        id: p.id,
        price: p.price,
        deadline: p.deadline,
        deliveredAt: p.deliveredAt,
        projectTypeEn: p.projectTypeEn ?? "",
        projectTypeAr: p.projectTypeAr ?? "",
        studentName: p.studentName ?? "",
        specialistNameEn: p.specialistNameEn,
        specialistNameAr: p.specialistNameAr,
    }));

    return {
        projects,
        hasMore,
    };
}
