import { getTranslations } from 'next-intl/server';
import { getCountries } from '@/actions/countries';
import CountriesLoadMore from '@/components/dashboard/CountriesLoadMore';

export default async function BanksPage() {
    const t = await getTranslations('dashboard.banksPage');
    const { countries, hasMore } = await getCountries(1);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <CountriesLoadMore
                initialCountries={countries}
                initialHasMore={hasMore}
            />
        </div>
    );
}
