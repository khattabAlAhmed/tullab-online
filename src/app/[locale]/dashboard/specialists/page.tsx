import { getTranslations } from 'next-intl/server';
import { getSpecialists } from '@/actions/specialists';
import SpecialistsLoadMore from '@/components/dashboard/SpecialistsLoadMore';

export default async function SpecialistsPage() {
    const t = await getTranslations('dashboard.specialistsPage');
    const { specialists, hasMore } = await getSpecialists(1, 15, "name");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <SpecialistsLoadMore
                initialSpecialists={specialists}
                initialHasMore={hasMore}
                initialSortBy="name"
            />
        </div>
    );
}
