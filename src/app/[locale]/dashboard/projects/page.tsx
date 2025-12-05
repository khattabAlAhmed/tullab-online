import { getTranslations } from 'next-intl/server';
import { getProjects } from '@/actions/projects';
import ProjectsLoadMore from '@/components/dashboard/ProjectsLoadMore';

export default async function ProjectsPage() {
    const t = await getTranslations('dashboard.projectsPage');
    const { projects, hasMore } = await getProjects(1, 15, "deadline");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
                <p className="text-muted-foreground mt-1">{t('subtitle')}</p>
            </div>

            <ProjectsLoadMore
                initialProjects={projects}
                initialHasMore={hasMore}
                initialSortBy="deadline"
            />
        </div>
    );
}
