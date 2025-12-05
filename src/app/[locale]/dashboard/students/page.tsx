import { getTranslations } from 'next-intl/server';
import { getStudents } from '@/actions/students';
import StudentsLoadMore from '@/components/dashboard/StudentsLoadMore';

export default async function StudentsPage() {
    const t = await getTranslations('dashboard.studentsPage');
    const { students, hasMore } = await getStudents(1, 15, "name");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <StudentsLoadMore
                initialStudents={students}
                initialHasMore={hasMore}
                initialSortBy="name"
            />
        </div>
    );
}
