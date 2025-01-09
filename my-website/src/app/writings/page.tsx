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

interface ProjectsInterface {
    [key: string] : ProjectInterface
}

// const projects = {

//     project1:{
//     heading: 'Implementation of Distributed Key-Value Store for a P2P Network',
//     introContent: 'Implemented a scalable key-value store using the Chord Protocol for decentralized networks. The Chord Protocol simplifies key lookup, node joining, and leaving processes, ensuring consistent behavior.',
//     keywords: ["distributed-systems", "golang", "grpcs"],
//     link: "/"},

//     project2:{
//         heading: 'Raft Consensus Algorithm Implementation',
//         introContent: 'Developed a replicated state machine using Raft, a distributed consensus protocol, to ensure log consistency across replicas in the system.',
//         keywords: ["distributed-systems", "golang", "raft", "erlang"],
//         link: "/"
//     }   
// }

export default function BasicCard() {

    const [projects, setProjects] = useState<ProjectsInterface | null>(null);

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
        {Object.entries(projects).map(([key, project], index) => (
        <WCard
            key={key}
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