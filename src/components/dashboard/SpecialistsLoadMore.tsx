"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getSpecialists, type Specialist, type SpecialistSortBy } from "@/actions/specialists";
import { Loader2, UserCog, Briefcase, ArrowUpDown } from "lucide-react";

type SpecialistsLoadMoreProps = {
    initialSpecialists: Specialist[];
    initialHasMore: boolean;
    initialSortBy: SpecialistSortBy;
};

export default function SpecialistsLoadMore({
    initialSpecialists,
    initialHasMore,
    initialSortBy,
}: SpecialistsLoadMoreProps) {
    const t = useTranslations("dashboard.specialistsPage");
    const locale = useLocale();

    const [specialists, setSpecialists] = useState<Specialist[]>(initialSpecialists);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [sortBy, setSortBy] = useState<SpecialistSortBy>(initialSortBy);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getSpecialists(nextPage, 15, sortBy);
            // Filter out any duplicates based on id
            const existingIds = new Set(specialists.map(s => s.id));
            const newSpecialists = result.specialists.filter(s => !existingIds.has(s.id));
            setSpecialists((prev) => [...prev, ...newSpecialists]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    const handleSortChange = (newSortBy: SpecialistSortBy) => {
        if (newSortBy === sortBy) return;

        startTransition(async () => {
            setSortBy(newSortBy);
            setPage(1);
            const result = await getSpecialists(1, 15, newSortBy);
            setSpecialists(result.specialists);
            setHasMore(result.hasMore);
        });
    };

    if (specialists.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noSpecialists")}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Sort Controls */}
            <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t("sortBy")}:</span>
                <div className="flex gap-2">
                    <Button
                        variant={sortBy === "name" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("name")}
                        disabled={isPending}
                    >
                        {t("sortByName")}
                    </Button>
                    <Button
                        variant={sortBy === "specialty" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("specialty")}
                        disabled={isPending}
                    >
                        {t("sortBySpecialty")}
                    </Button>
                </div>
            </div>

            {/* Specialists Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {specialists.map((s) => (
                    <div
                        key={s.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <UserCog className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold truncate">
                                    {locale === "ar" ? s.nameAr : s.nameEn}
                                </h3>
                                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                    <Briefcase className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">
                                        {locale === "ar" ? s.specialtyTitleAr : s.specialtyTitleEn}
                                    </span>
                                </div>
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
