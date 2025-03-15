import { NextResponse } from 'next/server';
import { loadStaticProjects } from '@/services/projectLoader';

export async function GET() {
    try {

        const projects = loadStaticProjects(); // ✅ Load at build time
        return NextResponse.json(projects); // ✅ Serve as JSON API
    } catch (error) {
        console.error('Error getting markdown data:', error);
        return NextResponse.json([], { status: 500 });
    }
}

// Force static generation at build time
export const dynamic = 'force-static';