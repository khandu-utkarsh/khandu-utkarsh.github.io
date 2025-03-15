import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const markdownDir = join(process.cwd(), 'public', 'projectMarkdown');
        const files = readdirSync(markdownDir);
        
        const markdownContents = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const content = readFileSync(join(markdownDir, file), 'utf-8');
                return content;
            });
        return NextResponse.json(markdownContents);
    } catch (error) {
        console.error('Error reading markdown files:', error);
        return NextResponse.json([], { status: 500 });
    }
}

// This ensures the API route is handled at build time
export const dynamic = 'force-static';