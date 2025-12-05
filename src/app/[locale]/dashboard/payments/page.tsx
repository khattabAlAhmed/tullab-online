import { getTranslations } from 'next-intl/server';
import { getPayments } from '@/actions/payments';
import PaymentsLoadMore from '@/components/dashboard/PaymentsLoadMore';

export default async function PaymentsPage() {
    const t = await getTranslations('dashboard.paymentsPage');
    const { payments, hasMore } = await getPayments(1, 15, "amount");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <PaymentsLoadMore
                initialPayments={payments}
                initialHasMore={hasMore}
                initialSortBy="amount"
            />
        </div>
    );
}
