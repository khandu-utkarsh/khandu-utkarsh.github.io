"use client"

import { Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Paper, Fade, CircularProgress, Container } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DownloadIcon from '@mui/icons-material/Download';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useEffect, useState } from 'react';
import Link from 'next/link'
import { themeConstants } from '@/theme/constants';


//!Declaring the types:
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

}

type jsonFileContent = {
  workex : CompanyInfo[];
  // education: any;
}

function RoleDetailsComponent({roleHeading, location, startDate, endDate, roleDesc} : RoleInfo) {
  //console.log("In the roleDetails comp: ", roleHeading, location, startDate, endDate, roleDesc);
  return (
    <Box sx={{paddingBottom: 2}}>
      <Typography 
        variant="h5" 
        sx={{
          fontWeight: 700,
          mb: 2,
          background: themeConstants.gradients.text,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {roleHeading}
      </Typography>
      <Typography 
        variant="subtitle1" 
        color="text.secondary" 
        sx={{ 
          paddingBottom: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <span>{location}</span>
        <span>•</span>
        <span>{startDate} - {endDate}</span>
      </Typography>

      <List sx={{paddingTop: 0, paddingBottom: 0}}>
        {roleDesc.map((duty) => (
          <ListItem 
            key={duty} 
            sx={{
              paddingTop: 0.5,
              paddingBottom: 0.5,
              alignItems: "flex-start"
            }}
          >
            <ListItemIcon sx={{minWidth: 40, color: 'primary.main'}}>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText 
              primary={duty}
              sx={{
                '& .MuiListItemText-primary': {
                  lineHeight: 1.6,
                  color: 'text.primary'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

function CompanyDetailsComponent(props : CompanyInfo) {
  const {name, url, roles} = props;
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: { xs: 3, sm: 4 },
        mb: 4,
        borderRadius: 2,
        background: themeConstants.gradients.primary,
        transition: themeConstants.transitions.default,
        '&:hover': {
          background: themeConstants.gradients.primaryHover,
        }
      }}
    >
      <Typography 
        variant="h4" 
        component={Link} 
        href={url} 
        target="_blank" 
        color="inherit" 
        sx={{
          mb: 2,
          textDecoration: "none",
          fontWeight: 700,
          display: 'inline-block',
          background: themeConstants.gradients.text,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          '&:hover': {
            color: 'primary.main',
            WebkitTextFillColor: 'initial',
          }
        }}
      >
        {name}
      </Typography>
      {roles.map((role) => (
        <RoleDetailsComponent 
          key={role.roleHeading}
          roleHeading={role.roleHeading}
          location={role.location}
          startDate={role.startDate}
          endDate={role.endDate}
          roleDesc={role.roleDesc}
        />
      ))}
    </Paper>
  )
}

function WorkExDetailsComponent({companies}: {companies: CompanyInfo[]}) {  
  return (
    <Fade in timeout={1000}>
      <Box>
        {companies.map((company)=> (
          <CompanyDetailsComponent 
            key={company.name} 
            name={company.name} 
            url={company.url} 
            roles={company.roles}
          /> 
        ))}
      </Box>
    </Fade>
  )
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

  const handleDownload = () => {
    const fileUrl = '/Utkarsh_Khandelwal_Resume_Feb_2025.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Utkarsh_Khandelwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if(isLoading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px' 
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if(!content) {
    return (
      <Typography variant="h5" color="error">
        Error loading resume data
      </Typography>
    );
  }

  const workexData = content?.workex;

  return (
    <Container maxWidth="md">
      <Fade in timeout={1000}>
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          {/* Download Button */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            mb: 4
          }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                px: 3,
                py: 1
              }}
            >
              Download Resume
            </Button>
          </Box>

          {/* Work Experience Section */}
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 3, sm: 4 },
              mb: 4,
              borderRadius: 2,
              background: themeConstants.gradients.primary,
              transition: themeConstants.transitions.default,
              '&:hover': {
                background: themeConstants.gradients.primaryHover,
              }
            }}
          >
            <Typography 
              variant="h3" 
              component="h1"
              sx={{ 
                mb: 2,
                fontWeight: 700,
                background: themeConstants.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Work Experience
            </Typography>
            <WorkExDetailsComponent companies={workexData}/>
          </Paper>

          <Divider sx={{ my: 4 }} />

          {/* Education Section */}
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 3, sm: 4 },
              borderRadius: 2,
              background: themeConstants.gradients.primary,
              transition: themeConstants.transitions.default,
              '&:hover': {
                background: themeConstants.gradients.primaryHover,
              }
            }}
          >
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                mb: 2,
                fontWeight: 700,
                background: themeConstants.gradients.text,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Education
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  background: themeConstants.gradients.text,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                New York University - Courant Institute of Mathematical Sciences
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                M.S. in Scientific Computing
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                2021 - 2023
              </Typography>
            </Box>

            <Box>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  background: themeConstants.gradients.text,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Indian Institute of Technology (BHU) Varanasi
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                B.Tech. in Mechanical Engineering
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                2014 - 2018
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Container>
  );
}