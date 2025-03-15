import { createSlug } from '@/utils/slugify';

export interface ProjectInterface {
    heading: string;
    date: string;
    introContent: string;
    keywords: string[];
    type: string;
    link: string;
    toBeDisplayed: boolean;
    content: string;
}

export class ProjectService {
    private static instance: ProjectService;
    private projects: ProjectInterface[] = [];

    private constructor() {
        // Initialize empty array
    }

    public static getInstance(): ProjectService {
        if (!ProjectService.instance) {
            ProjectService.instance = new ProjectService();
        }
        return ProjectService.instance;
    }

    private parseMarkdownContent(content: string): ProjectInterface {
        const lines = content.split('\n');
        
        // Get heading from first line (# Title)
        const heading = lines[0].replace('# ', '').trim();
        
        // Get date
        const dateMatch = content.match(/\*\*Date:\*\* (.*)/);
        const date = dateMatch ? dateMatch[1].trim() : '';
        
        // Get intro (text between date and keywords)
        const introMatch = content.split('## Keywords')[0]
            .split('\n\n')
            .slice(2, 3)
            .join('')
            .trim();

        // Get keywords
        const keywordsSection = content.split('## Keywords')[1]
            .split('## Content')[0];
        const keywords = keywordsSection
            .split('\n')
            .filter(line => line.startsWith('- '))
            .map(line => line.replace('- ', '').trim());

        // Get content
        const contentMatch = content.split('## Content')[1]?.trim() || '';

        // Get link from [Read more](link) pattern
        const linkMatch = content.match(/\[Read more\]\((.*?)\)/);
        
        //!TODO: 
        //const link = linkMatch ? linkMatch[1].trim() : ''; //<-- This is the link to the project, we can use this to link to the project page.
        const link = '';

        // Determine type based on heading (can be customized)
        const type = heading.toLowerCase().startsWith('implementation') ? 'implementation' : 'article';

        return {
            heading,
            date,
            introContent: introMatch,
            keywords,
            type,
            link,
            content: contentMatch,
            toBeDisplayed: true //!Displaying all things true right now, we can figure this out later on somehow.
        };
    }

    private async loadProjects(): Promise<ProjectInterface[]> {
        if (this.projects.length > 0) {
            return this.projects;
        }

        try {
            const response = await fetch('/api/markdown');
            if (!response.ok) throw new Error('Failed to fetch markdown files');
            const markdownContents = await response.json();
            
            this.projects = markdownContents.map((content: string) => 
                this.parseMarkdownContent(content)
            );

            return this.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    public async getAllProjects(): Promise<ProjectInterface[]> {
        return this.loadProjects();
    }

    public async getVisibleProjects(): Promise<ProjectInterface[]> {
        const allProjects = await this.loadProjects();
        return allProjects.filter(project => project.toBeDisplayed);
    }

    public async getProjectBySlug(slug: string): Promise<ProjectInterface | null> {
        const allProjects = await this.loadProjects();
        return allProjects.find(
            project => createSlug(project.heading) === slug && project.toBeDisplayed
        ) || null;
    }

    public async searchProjects(query: string): Promise<ProjectInterface[]> {
        const visibleProjects = await this.getVisibleProjects();
        const searchLower = query.toLowerCase();
        return visibleProjects.filter(project =>
            searchLower === '' ||
            project.heading.toLowerCase().includes(searchLower) ||
            project.introContent.toLowerCase().includes(searchLower) ||
            project.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
        );
    }
} 