import { getTranslations } from 'next-intl/server';
import { getUniversities } from '@/actions/universities';
import UniversitiesLoadMore from '@/components/dashboard/UniversitiesLoadMore';

export default async function UniversitiesPage() {
    const t = await getTranslations('dashboard.universitiesPage');
    const { universities, hasMore } = await getUniversities(1, 15, "name");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <UniversitiesLoadMore
                initialUniversities={universities}
                initialHasMore={hasMore}
                initialSortBy="name"
            />
        </div>
    );
}
