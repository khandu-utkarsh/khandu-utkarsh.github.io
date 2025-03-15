import projectDetails from '../../public/projectDetails.json';
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
    private projects: ProjectInterface[];

    private constructor() {
        this.projects = projectDetails.projects as ProjectInterface[];
        //!TODO: For now, setting the link to an empty string.
        this.projects = this.projects.map(project => ({
            ...project,
            link: "",
        }));
    }

    public static getInstance(): ProjectService {
        if (!ProjectService.instance) {
            ProjectService.instance = new ProjectService();
        }
        return ProjectService.instance;
    }

    public async getAllProjects(): Promise<ProjectInterface[]> {
        return this.projects;
    }

    public async getVisibleProjects(): Promise<ProjectInterface[]> {
        const allProjects = await this.getAllProjects();
        return allProjects.filter(project => project.toBeDisplayed);
    }

    public async getProjectBySlug(slug: string): Promise<ProjectInterface | null> {
        const allProjects = await this.getAllProjects();
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