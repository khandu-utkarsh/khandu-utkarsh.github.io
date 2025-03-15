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


// Project service functions
export class ProjectService {
    private static instance: ProjectService;
    private static projects: ProjectInterface[] = [];


    private constructor(projects: ProjectInterface[]) {
        ProjectService.projects = projects;
    }
    
    static getInstance(projects: ProjectInterface[]): ProjectService {
        if (!ProjectService.instance) {
            ProjectService.instance = new ProjectService(projects);
        }
        return ProjectService.instance;
    }

    getAllProjects(): ProjectInterface[] {
        return ProjectService.projects;
    }
    
    getVisibleProjects(): ProjectInterface[] {
        return ProjectService.projects.filter(project => project.toBeDisplayed);
    }

    getProjectBySlug(slug: string): ProjectInterface | null {
        return ProjectService.projects.find(
            project => createSlug(project.heading) === slug && project.toBeDisplayed
        ) || null;
    }

    searchProjects(query: string): ProjectInterface[] {
        const visibleProjects = ProjectService.projects.filter(project => project.toBeDisplayed);
        const searchLower = query.toLowerCase();
        return visibleProjects.filter(project =>
            searchLower === '' ||
            project.heading.toLowerCase().includes(searchLower) ||
            project.introContent.toLowerCase().includes(searchLower) ||
            project.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
        );
    }
}
