"use client"

import React, { useEffect, useState } from "react";

import { Typography, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WCard from "@/components/WritingsCard"
//import {WCardProps} from "@/components/WritingsCard"


interface ProjectInterface {
    heading: string;
    date: string
    introContent: string;
    keywords: string[];
    link: string;
}

export default function BasicCard() {

    const [projects, setProjects] = useState<ProjectInterface[] | null>(null);

    useEffect(() => {
        // Fetch the JSON file from the public directory
        fetch("/projectDetails.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch projects");
            }
            return response.json();
        })
        .then((data) => {
            setProjects(data.projects); // Update state with fetched data
        })
        .catch((error) => {
        console.error("Error fetching projects:", error);
        });
    }, []);

    // Show loading message while data is being fetched
    if (!projects) {
        return <Typography variant="h5">Loading projects...</Typography>;
    }


    // Render project cards after data is loaded
    return (
    <>

        {projects.map((project, index, projects) => (
        <WCard
            key={project.heading}
            cardHeading={project.heading}
            date={project.date}
            introContent={project.introContent}
            linkToArticle={project.link}
            keywords={project.keywords}
            sx={{
                paddingBottom: {xs: index === Object.entries(projects).length - 1 ? 0 : 1, sm: index === Object.entries(projects).length - 1 ? 0 : 5},
              }}
        />
        ))}
    </>
    );

}