import { useTranslations } from 'next-intl';

export default function UniversitiesPage() {
    const t = useTranslations('dashboard.sidebar');
    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">{t('universities')} Placeholder</h1>
        </div>
    );
}
