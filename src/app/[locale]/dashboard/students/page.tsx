import { useTranslations } from 'next-intl';

export default function StudentsPage() {
    const t = useTranslations('dashboard.sidebar');
    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">{t('students')} Placeholder</h1>
        </div>
    );
}
