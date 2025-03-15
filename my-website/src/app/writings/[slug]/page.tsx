import { createSlug } from '@/utils/slugify';
import ArticleContent from '@/app/writings/[slug]/ArticleContent';
import projectDetails from '../../../../public/projectDetails.json';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const article = projectDetails.projects.find(
        (project) => createSlug(project.heading) === resolvedParams.slug && project.toBeDisplayed
    );

    return {
        title: article?.heading || 'Article Not Found',
        description: article?.introContent || 'Article not found'
    };
}

export async function generateStaticParams() {
    return projectDetails.projects
        .filter(project => project.toBeDisplayed)
        .map((project) => ({
            slug: createSlug(project.heading),
        }));
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const article = projectDetails.projects.find(
        (project) => createSlug(project.heading) === resolvedParams.slug && project.toBeDisplayed
    );

    return <ArticleContent article={article || null} />;
}

// Configure dynamic parameters behavior
export const dynamic = 'force-static';
export const dynamicParams = false;
