"use client"

import React, { useEffect, useState } from "react";
import { Typography, TextField, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WCard from "@/components/WritingsCard"

interface ProjectInterface {
    heading: string;
    date: string;
    introContent: string;
    keywords: string[];
    type: string;
    link: string;
}

// export async function getStaticProps() {
//     // Fetch any necessary data here, or just return an empty object
//     return {
//       props: {},
//     };
//   }
  


export default function BasicCard() {
    const [projects, setProjects] = useState<ProjectInterface[] | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch("/projectDetails.json")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch projects");
                return response.json();
            })
            .then((data) => {
                setProjects(data.projects);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    const filteredProjects = projects?.filter(project => {
        // Text search
        const searchMatch = 
            searchQuery === '' ||
            project.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.introContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
 
        return searchMatch;
    });

    // Show loading message while data is being fetched
    if (!projects) {
        return <Typography variant="h5">Loading projects...</Typography>;
    }

    // Render project cards after data is loaded
    return (
        <Box sx={{}}>
            {/* Filter Section */}
            <Box sx={{}}>
                {/* Search Bar */}
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search writings..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        paddingBottom: {
                            xs: 1,
                            sm: 5
                        },
                    }}
                />
            </Box>

            {/* Projects List */}
            {filteredProjects?.map((project, index) => (
                <WCard
                    key={project.heading}
                    cardHeading={project.heading}
                    date={project.date}
                    introContent={project.introContent}
                    linkToArticle={project.link}
                    keywords={project.keywords}
                    sx={{
                        paddingBottom: {
                            xs: index === filteredProjects.length - 1 ? 0 : 1,
                            sm: index === filteredProjects.length - 1 ? 0 : 5
                        },
                    }}
                />
            ))}
        </Box>
    );
}