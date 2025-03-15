"use client"

import { Typography, Divider, ListItemIcon, Fade, CircularProgress, Box, List } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useState } from 'react';
import {
    PageContainer,
    ContentContainer,
    Section,
    FlexBetween,
    GradientHeading,
    StyledPaper,
    StyledList,
    StyledListItem,
    StyledListItemIcon,
    StyledListItemText,
    GradientButton,
    GradientLink,
    LoadingContainer,
    ErrorText,
} from '@/components/styles/Common.styles';

// Types
type RoleInfo = {
    roleHeading: string;
    location: string;
    startDate: string;
    endDate: string;
    roleDesc: string[];
};

type CompanyInfo = {
    name: string;
    url: string;
    roles: RoleInfo[];
};

type jsonFileContent = {
    workex: CompanyInfo[];
};

// Resume-specific components
function RoleDetailsComponent({ roleHeading, location, startDate, endDate, roleDesc }: RoleInfo) {
    return (
        <Box sx={{ pb: 2 }}>
            <GradientHeading variant="h5">
                {roleHeading}
            </GradientHeading>
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                color: 'text.secondary',
                mb: 2 
            }}>
                <span>{location}</span>
                <span>•</span>
                <span>{startDate} - {endDate}</span>
            </Box>

            <StyledList>
                {roleDesc.map((duty) => (
                    <StyledListItem key={duty}>
                        <ListItemIcon>
                            <StyledListItemIcon>
                                <ArrowRightAltIcon />
                            </StyledListItemIcon>
                        </ListItemIcon>
                        <StyledListItemText primary={duty} />
                    </StyledListItem>
                ))}
            </StyledList>
        </Box>
    );
}

function CompanyDetailsComponent({ name, url, roles }: CompanyInfo) {
    return (
        <StyledPaper elevation={0}>
            <GradientLink href={url} target="_blank">
                <GradientHeading variant="h4">
                    {name}
                </GradientHeading>
            </GradientLink>
            {roles.map((role) => (
                <RoleDetailsComponent key={role.roleHeading} {...role} />
            ))}
        </StyledPaper>
    );
}

function WorkExDetailsComponent({ companies }: { companies: CompanyInfo[] }) {
    return (
        <Fade in timeout={1000}>
            <div>
                {companies.map((company) => (
                    <CompanyDetailsComponent key={company.name} {...company} />
                ))}
            </div>
        </Fade>
    );
}

// Add this new component for education details
function EducationDetailsComponent({ 
    institution, 
    degree, 
    years 
}: { 
    institution: string; 
    degree: string; 
    years: string; 
}) {
    return (
        <Box sx={{ mb: 4, '&:last-child': { mb: 0 } }}>
            <GradientHeading variant="h5">
                {institution}
            </GradientHeading>
            <Box sx={{ color: 'text.secondary' }}>
                <Typography sx={{ mb: 1 }}>
                    {degree}
                </Typography>
                <Typography>
                    {years}
                </Typography>
            </Box>
        </Box>
    );
}

export default function Resume() {
    const [content, setContent] = useState<jsonFileContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("/projectDetails.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                return response.json();
            })
            .then((data) => {
                setContent(data.resume);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        );
    }

    if (!content) {
        return (
            <ErrorText variant="h5">
                Error loading resume data
            </ErrorText>
        );
    }

    const workexData = content?.workex;

    return (
        <PageContainer>
            <Fade in timeout={1000}>
                <ContentContainer>
                    <Section>
                        <FlexBetween>
                            <div /> {/* Empty div for spacing */}
                            <GradientButton
                                variant="contained"
                                startIcon={<DownloadIcon />}
                                onClick={() => {
                                    const fileUrl = '/Utkarsh_Khandelwal_Resume_Feb_2025.pdf';
                                    const link = document.createElement('a');
                                    link.href = fileUrl;
                                    link.download = 'Utkarsh_Khandelwal_Resume.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                Download Resume
                            </GradientButton>
                        </FlexBetween>
                    </Section>

                    <Section>
                        <StyledPaper elevation={0}>
                            <GradientHeading variant="h3" component="h1">
                                Work Experience
                            </GradientHeading>
                            <WorkExDetailsComponent companies={workexData} />
                        </StyledPaper>
                    </Section>

                    <Divider sx={{ my: 4 }} />

                    <Section>
                        <StyledPaper elevation={0}>
                            <GradientHeading variant="h3" component="h2">
                                Education
                            </GradientHeading>
                            
                            <EducationDetailsComponent
                                institution="New York University - Courant Institute of Mathematical Sciences"
                                degree="M.S. in Scientific Computing"
                                years="2021 - 2023"
                            />
                            
                            <EducationDetailsComponent
                                institution="Indian Institute of Technology (BHU) Varanasi"
                                degree="B.Tech. in Mechanical Engineering"
                                years="2014 - 2018"
                            />
                        </StyledPaper>
                    </Section>
                </ContentContainer>
            </Fade>
        </PageContainer>
    );
}