"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getCountries, type Country } from "@/actions/countries";
import { Loader2 } from "lucide-react";

type CountriesLoadMoreProps = {
    initialCountries: Country[];
    initialHasMore: boolean;
};

export default function CountriesLoadMore({
    initialCountries,
    initialHasMore,
}: CountriesLoadMoreProps) {
    const t = useTranslations("dashboard.banksPage");
    const locale = useLocale();

    const [countries, setCountries] = useState<Country[]>(initialCountries);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getCountries(nextPage);
            setCountries((prev) => [...prev, ...result.countries]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    if (countries.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noCountries")}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map((c) => (
                    <div
                        key={c.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                                {locale === "ar" ? c.nameAr : c.nameEn}
                            </h3>
                            <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                {c.code}
                            </span>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            <span className="font-medium">{t("timezone")}:</span>{" "}
                            {c.timezone}
                        </div>
                    </div>
                ))}
            </div>

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
