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


/*
Follow this format for the markdown files:


## Heading
Your Article Title Here
---

## Date
January 2024
---

## Type
article
---

## Intro
This is the introduction paragraph that will appear in the card...
---

## Keywords
- React
- TypeScript
- Next.js
---

## Link
https://your-link-here.com
---

## Content
Your main content goes here...
This can be multiple paragraphs.

You can include code blocks, lists, etc.
---

*/
// Mark this file as server-only
export const dynamic = 'force-static';



function parseMarkdownContent(content: string): ProjectInterface {
    // Helper function to get content between markers
    const getContentBetweenMarkers = (startMarker: string, endMarker: string = '---'): string => {
        const parts = content.split(startMarker)[1]?.split(endMarker);
        return parts?.[0]?.trim() || '';
    };

    // Get each section using the marker approach
    const heading = getContentBetweenMarkers('## Heading');
    const dateStr = getContentBetweenMarkers('## Date');
    const introContent = getContentBetweenMarkers('## Intro');
    const type = getContentBetweenMarkers('## Type');
    const link = getContentBetweenMarkers('## Link');
    const mainContent = getContentBetweenMarkers('## Content');

    // Get keywords (keeping the list format)
    const keywordsContent = getContentBetweenMarkers('## Keywords');
    const keywords = keywordsContent
        .split('\n')
        .filter(line => line.startsWith('- '))
        .map(line => line.replace('- ', '').trim());

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
            introContent,
            keywords,
            type: type.toLowerCase(),
            link,
            content: mainContent,
            toBeDisplayed: true
        };
    } catch (error) {
        // Fallback to first day of current month if any error occurs
        const fallbackDate = new Date();
        fallbackDate.setDate(1);
        console.warn(`Invalid date format in ${heading}, using fallback date`);
        console.error(`Error: ${error}`);
        return {
            heading,
            date: fallbackDate,
            introContent,
            keywords,
            type: type.toLowerCase(),
            link,
            content: mainContent,
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