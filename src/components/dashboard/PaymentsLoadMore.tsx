"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getPayments, type Payment, type PaymentSortBy } from "@/actions/payments";
import { Loader2, CreditCard, Building2, DollarSign, ArrowUpDown, Paperclip } from "lucide-react";

type PaymentsLoadMoreProps = {
    initialPayments: Payment[];
    initialHasMore: boolean;
    initialSortBy: PaymentSortBy;
};

function formatAmount(amount: string, currency: string): string {
    const num = parseFloat(amount);
    if (isNaN(num)) return `${amount} ${currency}`;
    return `${num.toLocaleString()} ${currency}`;
}

export default function PaymentsLoadMore({
    initialPayments,
    initialHasMore,
    initialSortBy,
}: PaymentsLoadMoreProps) {
    const t = useTranslations("dashboard.paymentsPage");
    const locale = useLocale();

    const [payments, setPayments] = useState<Payment[]>(initialPayments);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [sortBy, setSortBy] = useState<PaymentSortBy>(initialSortBy);
    const [isPending, startTransition] = useTransition();

    const loadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await getPayments(nextPage, 15, sortBy);
            // Filter out any duplicates based on id
            const existingIds = new Set(payments.map(p => p.id));
            const newPayments = result.payments.filter(p => !existingIds.has(p.id));
            setPayments((prev) => [...prev, ...newPayments]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    const handleSortChange = (newSortBy: PaymentSortBy) => {
        if (newSortBy === sortBy) return;

        startTransition(async () => {
            setSortBy(newSortBy);
            setPage(1);
            const result = await getPayments(1, 15, newSortBy);
            setPayments(result.payments);
            setHasMore(result.hasMore);
        });
    };

    if (payments.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
                {t("noPayments")}
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
                        variant={sortBy === "amount" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("amount")}
                        disabled={isPending}
                    >
                        {t("sortByAmount")}
                    </Button>
                    <Button
                        variant={sortBy === "currency" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("currency")}
                        disabled={isPending}
                    >
                        {t("sortByCurrency")}
                    </Button>
                    <Button
                        variant={sortBy === "bank" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange("bank")}
                        disabled={isPending}
                    >
                        {t("sortByBank")}
                    </Button>
                </div>
            </div>

            {/* Payments Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {payments.map((p) => (
                    <div
                        key={p.id}
                        className="rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-primary" />
                                <span className="text-lg font-bold text-primary">
                                    {formatAmount(p.amount, p.currency)}
                                </span>
                            </div>
                            {p.depositAttachmentUrl && (
                                <Paperclip className="h-4 w-4 text-muted-foreground" />
                            )}
                        </div>

                        <div className="mt-3 space-y-2 text-sm">
                            {(p.bankNameEn || p.bankNameAr) && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
                                    <span className="truncate">
                                        {locale === "ar" ? p.bankNameAr : p.bankNameEn}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <DollarSign className="h-3.5 w-3.5 flex-shrink-0" />
                                <span>{p.currency}</span>
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
