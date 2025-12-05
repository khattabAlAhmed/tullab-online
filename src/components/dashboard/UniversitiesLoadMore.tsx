"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getUniversities, type University, type SortBy } from "@/actions/universities";
import { Loader2, GraduationCap, MapPin, ArrowUpDown } from "lucide-react";

type UniversitiesLoadMoreProps = {
    initialUniversities: University[];
    initialHasMore: boolean;
    initialSortBy: SortBy;
};

export default function UniversitiesLoadMore({
    initialUniversities,
    initialHasMore,
    initialSortBy,
}: UniversitiesLoadMoreProps) {
    const t = useTranslations("dashboard.universitiesPage");
    const locale = useLocale();

    const [universities, setUniversities] = useState<University[]>(initialUniversities);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [sortBy, setSortBy] = useState<SortBy>(initialSortBy);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getUniversities(nextPage, 15, sortBy);
            // Filter out any duplicates based on id
            const existingIds = new Set(universities.map(u => u.id));
            const newUniversities = result.universities.filter(u => !existingIds.has(u.id));
            setUniversities((prev) => [...prev, ...newUniversities]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    const handleSortChange = (newSortBy: SortBy) => {
        if (newSortBy === sortBy) return;

        startTransition(async () => {
            setSortBy(newSortBy);
            setPage(1);
            const result = await getUniversities(1, 15, newSortBy);
            setUniversities(result.universities);
            setHasMore(result.hasMore);
        });
    };

    if (universities.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noUniversities")}
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
                        variant={sortBy === "country" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("country")}
                        disabled={isPending}
                    >
                        {t("sortByCountry")}
                    </Button>
                </div>
            </div>

            {/* Universities Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {universities.map((u) => (
                    <div
                        key={u.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 overflow-hidden">
                                {u.logoUrl ? (
                                    <img
                                        src={u.logoUrl}
                                        alt={locale === "ar" ? u.nameAr : u.nameEn}
                                        className="h-10 w-10 rounded object-contain"
                                    />
                                ) : (
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold truncate">
                                    {locale === "ar" ? u.nameAr : u.nameEn}
                                </h3>
                                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">
                                        {locale === "ar" ? u.countryNameAr : u.countryNameEn}
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
