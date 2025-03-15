import * as fs from 'fs';
import * as path from 'path';
const projectDetails = require('../data/projectDetails.json');

// Simple slugify function since we can't import from the Next.js app
const createSlug = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

// Get the correct path for output directory
const scriptDir = __dirname;
const markdownDir = path.join(scriptDir, 'src', 'data', 'markdown');

// Create directory if it doesn't exist
if (!fs.existsSync(markdownDir)) {
    fs.mkdirSync(markdownDir, { recursive: true });
}

projectDetails.projects.forEach((project: any) => {
    const fileName = createSlug(project.heading) + '.md';
    const content = `# ${project.heading}

**Date:** ${project.date}

${project.introContent}

## Keywords
${project.keywords.map((k: string) => `- ${k}`).join('\n')}

${project.content ? `\n## Content\n${project.content}` : ''}

${project.link ? `\n[Read more](${project.link})` : ''}
`;

    // Write markdown files
    fs.writeFileSync(path.join(markdownDir, fileName), content);
    console.log(`Created: ${fileName}`);
}); 