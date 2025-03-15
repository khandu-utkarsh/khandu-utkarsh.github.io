import fs from 'fs';
import path from 'path';
import { ProjectInterface } from './projectService';

// Mark this file as server-only
export const dynamic = 'force-static';

function parseMarkdownContent(content: string): ProjectInterface {
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
    const linkReadMore = linkMatch ? linkMatch[1].trim() : '';
    console.log(linkReadMore);
    const link = "";

    // Determine type based on heading
    const type = heading.toLowerCase().startsWith('implementation') ? 'implementation' : 'article';

    return {
        heading,
        date,
        introContent: introMatch,
        keywords,
        type,
        link,
        content: contentMatch,
        toBeDisplayed: true
    };
}


export function loadStaticProjects(): ProjectInterface[] {
    try {
        const markdownDir = path.join(process.cwd(), 'public', 'projectMarkdown');
        const files = fs.readdirSync(markdownDir);

        return files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
                return parseMarkdownContent(content);
            });
    } catch (error) {
        console.error('Error loading markdown files:', error);
        return [];
    }
}