import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
    const t = useTranslations('dashboard.sidebar');
    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">{t('projects')} Placeholder</h1>
        </div>
    );
}
