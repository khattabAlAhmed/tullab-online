"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getProjects, type Project, type ProjectSortBy } from "@/actions/projects";
import { Loader2, FolderKanban, User, UserCog, Calendar, DollarSign, ArrowUpDown, CheckCircle2 } from "lucide-react";

type ProjectsLoadMoreProps = {
    initialProjects: Project[];
    initialHasMore: boolean;
    initialSortBy: ProjectSortBy;
};

function formatDate(date: Date | null, locale: string): string {
    if (!date) return "-";
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}

function formatPrice(price: string): string {
    const num = parseFloat(price);
    return isNaN(num) ? price : num.toLocaleString();
}

export default function ProjectsLoadMore({
    initialProjects,
    initialHasMore,
    initialSortBy,
}: ProjectsLoadMoreProps) {
    const t = useTranslations("dashboard.projectsPage");
    const locale = useLocale();

    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [sortBy, setSortBy] = useState<ProjectSortBy>(initialSortBy);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getProjects(nextPage, 15, sortBy);
            // Filter out any duplicates based on id
            const existingIds = new Set(projects.map(p => p.id));
            const newProjects = result.projects.filter(p => !existingIds.has(p.id));
            setProjects((prev) => [...prev, ...newProjects]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    const handleSortChange = (newSortBy: ProjectSortBy) => {
        if (newSortBy === sortBy) return;

        startTransition(async () => {
            setSortBy(newSortBy);
            setPage(1);
            const result = await getProjects(1, 15, newSortBy);
            setProjects(result.projects);
            setHasMore(result.hasMore);
        });
    };

    if (projects.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noProjects")}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Sort Controls */}
            <div className="flex items-center gap-2 flex-wrap">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t("sortBy")}:</span>
                <div className="flex gap-2 flex-wrap">
                    <Button
                        variant={sortBy === "deadline" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("deadline")}
                        disabled={isPending}
                    >
                        {t("sortByDeadline")}
                    </Button>
                    <Button
                        variant={sortBy === "price" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("price")}
                        disabled={isPending}
                    >
                        {t("sortByPrice")}
                    </Button>
                    <Button
                        variant={sortBy === "type" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("type")}
                        disabled={isPending}
                    >
                        {t("sortByType")}
                    </Button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <div
                        key={p.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <FolderKanban className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">
                                    {locale === "ar" ? p.projectTypeAr : p.projectTypeEn}
                                </h3>
                            </div>
                            {p.deliveredAt && (
                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                            )}
                        </div>

                        <div className="mt-3 space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-3.5 w-3.5 flex-shrink-0" />
                                <span className="truncate">{p.studentName}</span>
                            </div>

                            {(p.specialistNameEn || p.specialistNameAr) && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <UserCog className="h-3.5 w-3.5 flex-shrink-0" />
                                    <span className="truncate">
                                        {locale === "ar" ? p.specialistNameAr : p.specialistNameEn}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                                <span>{formatDate(p.deadline, locale)}</span>
                            </div>

                            <div className="flex items-center gap-2 font-medium text-primary">
                                <DollarSign className="h-3.5 w-3.5 flex-shrink-0" />
                                <span>{formatPrice(p.price)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center">
                    <Button
                        onClick={loadMore}
                        disabled={isPending}
                        variant="outline"
                        className="min-w-[140px]"
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {t("loading")}
                            </>
                        ) : (
                            t("loadMore")
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
}
