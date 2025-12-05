"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getBanks, type Bank } from "@/actions/banks";
import { Loader2, Building2, MapPin } from "lucide-react";

type BanksLoadMoreProps = {
    initialBanks: Bank[];
    initialHasMore: boolean;
};

export default function BanksLoadMore({
    initialBanks,
    initialHasMore,
}: BanksLoadMoreProps) {
    const t = useTranslations("dashboard.banksPage");
    const locale = useLocale();

    const [banks, setBanks] = useState<Bank[]>(initialBanks);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getBanks(nextPage);
            setBanks((prev) => [...prev, ...result.banks]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    if (banks.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noBanks")}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {banks.map((b) => (
                    <div
                        key={b.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                {b.logo ? (
                                    <img
                                        src={b.logo}
                                        alt={locale === "ar" ? b.nameAr : b.nameEn}
                                        className="h-10 w-10 rounded object-contain"
                                    />
                                ) : (
                                    <Building2 className="h-6 w-6 text-primary" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    {locale === "ar" ? b.nameAr : b.nameEn}
                                </h3>
                                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    {locale === "ar" ? b.countryNameAr : b.countryNameEn}
                                </div>
                            </div>
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
