import fs from 'fs';
import path from 'path';

export interface ProjectInterface {
    heading: string;
    date: Date;
    introContent: string;
    keywords: string[];
    type: string;
    link: string;
    toBeDisplayed: boolean;
    content: string;
}


// Mark this file as server-only
export const dynamic = 'force-static';

function parseMarkdownContent(content: string): ProjectInterface {
    const lines = content.split('\n');
    
    // Get heading from first line (# Title)
    const heading = lines[0].replace('# ', '').trim();
    
    // Get date and convert to Date object with only month and year
    const dateMatch = content.match(/\*\*Date:\*\* (.*)/);
    const dateStr = dateMatch ? dateMatch[1].trim() : '';
    
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

    try {
        // Parse the date string and set day to 1st of the month
        const [month, year] = dateStr.split(' ');
        const date = new Date(`${month} 1, ${year}`);
        
        // Verify it's a valid date
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }
        
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
    } catch (error) {
        // Fallback to first day of current month if any error occurs
        const fallbackDate = new Date();
        fallbackDate.setDate(1);
        console.warn(`Invalid date format in ${heading}, using fallback date`);
        console.log(`Error date: ${error}`);
        
        return {
            heading,
            date: fallbackDate,
            introContent: introMatch,
            keywords,
            type,
            link,
            content: contentMatch,
            toBeDisplayed: true
        };
    }
}


export function loadStaticProjects(): ProjectInterface[] {
    try {
        const markdownDir = path.join(process.cwd(), 'public', 'projectMarkdown');
        const files = fs.readdirSync(markdownDir);

        const projects = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
                return parseMarkdownContent(content);
            });
        // Sort projects by date (newest first)
        const sortedProjects = projects.sort((a, b) => b.date.getTime() - a.date.getTime());
        return sortedProjects;
    } catch (error) {
        console.error('Error loading markdown files:', error);
        return [];
    }
}