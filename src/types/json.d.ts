declare module "*.json" {
    interface Project {
        heading: string;
        date: string;
        introContent: string;
        keywords: string[];
        content?: string;
        link?: string;
        type: string;
        toBeDisplayed: boolean;
    }

    interface ProjectDetails {
        projects: Project[];
        resume: {
            workex: any[];
            education: any;
        }
    }

    const value: ProjectDetails;
    export default value;
} 