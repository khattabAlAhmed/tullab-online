"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getStudents, type Student, type StudentSortBy } from "@/actions/students";
import { Loader2, User, Flag, GraduationCap, Phone, Send, ArrowUpDown } from "lucide-react";

type StudentsLoadMoreProps = {
    initialStudents: Student[];
    initialHasMore: boolean;
    initialSortBy: StudentSortBy;
};

export default function StudentsLoadMore({
    initialStudents,
    initialHasMore,
    initialSortBy,
}: StudentsLoadMoreProps) {
    const t = useTranslations("dashboard.studentsPage");
    const locale = useLocale();

    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [sortBy, setSortBy] = useState<StudentSortBy>(initialSortBy);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getStudents(nextPage, 15, sortBy);
            // Filter out any duplicates based on id
            const existingIds = new Set(students.map(s => s.id));
            const newStudents = result.students.filter(s => !existingIds.has(s.id));
            setStudents((prev) => [...prev, ...newStudents]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    const handleSortChange = (newSortBy: StudentSortBy) => {
        if (newSortBy === sortBy) return;

        startTransition(async () => {
            setSortBy(newSortBy);
            setPage(1);
            const result = await getStudents(1, 15, newSortBy);
            setStudents(result.students);
            setHasMore(result.hasMore);
        });
    };

    if (students.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noStudents")}
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
                        variant={sortBy === "name" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("name")}
                        disabled={isPending}
                    >
                        {t("sortByName")}
                    </Button>
                    <Button
                        variant={sortBy === "nationality" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("nationality")}
                        disabled={isPending}
                    >
                        {t("sortByNationality")}
                    </Button>
                    <Button
                        variant={sortBy === "studyIn" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("studyIn")}
                        disabled={isPending}
                    >
                        {t("sortByStudyIn")}
                    </Button>
                </div>
            </div>

            {/* Students Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {students.map((s) => (
                    <div
                        key={s.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold truncate">
                                    {s.name}
                                </h3>
                                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                    <Flag className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">
                                        {locale === "ar" ? s.nationalityNameAr : s.nationalityNameEn}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <GraduationCap className="h-3.5 w-3.5 flex-shrink-0" />
                                <span className="truncate">
                                    {t("studiesIn")}: {locale === "ar" ? s.studyInNameAr : s.studyInNameEn}
                                </span>
                            </div>

                            {s.phoneNumber && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                                    <span dir="ltr">{s.phoneNumber}</span>
                                </div>
                            )}

                            {s.telegramUser && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Send className="h-3.5 w-3.5 flex-shrink-0" />
                                    <span>@{s.telegramUser}</span>
                                </div>
                            )}
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
