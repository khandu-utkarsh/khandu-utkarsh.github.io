import { createSlug } from '@/utils/slugify';
import ArticleContent from '@/app/writings/[slug]/ArticleContent';
import { ProjectService } from '@/services/projectService';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const projectService = ProjectService.getInstance();
    const article = await projectService.getProjectBySlug(resolvedParams.slug);

    return {
        title: article?.heading || 'Article Not Found',
        description: article?.introContent || 'Article not found'
    };
}

export async function generateStaticParams() {
    const projectService = ProjectService.getInstance();
    const projects = await projectService.getVisibleProjects();
    return projects.map((project) => ({
        slug: createSlug(project.heading),
    }));
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const projectService = ProjectService.getInstance();
    const article = await projectService.getProjectBySlug(resolvedParams.slug);

    return <ArticleContent article={article} />;
}

// Configure dynamic parameters behavior
export const dynamic = 'force-static';
export const dynamicParams = false;
