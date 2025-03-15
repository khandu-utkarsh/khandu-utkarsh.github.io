import { createSlug } from '@/utils/slugify';
import ArticleContent from './ArticleContent';
import { loadStaticProjects } from '@/services/projectLoader';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const projects = loadStaticProjects();
    const article = projects.find(proj => createSlug(proj.heading) === slug);

    return {
        title: article?.heading || 'Article Not Found',
        description: article?.introContent || 'Article not found',
    };
}


// ✅ Generate all slugs at build time
export async function generateStaticParams() {
    const projects = loadStaticProjects();
    return projects.map((project) => ({
        slug: createSlug(project.heading),
    }));
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const projects = loadStaticProjects();
    const article = projects.find(proj => createSlug(proj.heading) === slug);

    if (!article) {
        return <div>Article Not Found</div>;
    }

    return <ArticleContent article={article} />;
}

// Configure dynamic parameters behavior
export const dynamic = 'force-static';
export const dynamicParams = false;
