import { createSlug } from '@/utils/slugify';
import ArticleContent from './ArticleContent';
import projectDetails from '../../../../public/projectDetails.json';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    // Log to verify the data
    console.log("Available projects:", projectDetails.projects);
    
    return projectDetails.projects
        .filter(project => project.toBeDisplayed)
        .map((project) => ({
            slug: createSlug(project.heading),
        }));
}

export default function ArticlePage({ params }: PageProps) {
    // Log to debug
    console.log("Current slug:", params.slug);
    console.log("All projects:", projectDetails.projects);
    
    const article = projectDetails.projects.find(
        (project) => createSlug(project.heading) === params.slug && project.toBeDisplayed
    );
    
    // Log the found article
    console.log("Found article:", article);

    return <ArticleContent article={article || null} />;
} 