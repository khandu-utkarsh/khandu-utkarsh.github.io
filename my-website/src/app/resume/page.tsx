"use client"

import { Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Button} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DownloadIcon from '@mui/icons-material/Download';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useEffect, useState } from 'react';
import Link from 'next/link'


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
    <Typography variant="h6" color="text.secondary" sx={{backgroundColor: ""}}> {roleHeading}</Typography>
    <Typography variant="subtitle1" color="text.secondary" sx={{ paddingBottom: 1, backgroundColor: ""}}> {location} | {startDate} - {endDate}</Typography>

    <List sx={{paddingTop: 0, paddingBottom: 0, backgroundColor: ""}}>
      {roleDesc.map((duty) => (
        <ListItem key={duty} sx={{paddingTop: 0, paddingBottom: 0, backgroundColor: "", alignItems:"flex-start"}}>
          <ListItemIcon sx={{minWidth: 40}}>
            <ArrowRightAltIcon />
          </ListItemIcon>
        <ListItemText sx={{margin: {xs:0, sm: 0}}}primary={duty} />
  </ListItem>
))}
</List>

    </Box>
  )
}

function CompanyDetailsComponent(props : CompanyInfo) {
  //console.log("In the company detail component: ", props);  
  const {name, url, roles} = props;

  //!TODO ADD URL on the company name so that if someone clicks, it is redirected simply
  return (
    <Box sx={{backgroundColor: "", paddingBottom: 2}}>
      <Typography variant="h6" component={Link} href={url} target="_blank" color="inherit" sx={{paddingBottom: 2, textDecoration:"none"}}>{name}</Typography>
      {
        roles.map((role) => (
          <RoleDetailsComponent 
            key={role.roleHeading}
            roleHeading={role.roleHeading}
            location={role.location}
            startDate={role.startDate}
            endDate={role.endDate}
            roleDesc={role.roleDesc}
          />
          )
        )
      }
    </Box>
  )
}


function WorkExDetailsComponent({companies}: {companies: CompanyInfo[]}) {  
  //console.log("In the companies section is it: ", companies);
  return (
    <>
      {
        companies.map((company)=> (
          <CompanyDetailsComponent key={company.name} name={company.name} url={company.url} roles={company.roles}/> 
        ))
      }
    </>    
  )
}


// export async function getStaticProps() {
//   // Fetch any necessary data here, or just return an empty object
//   return {
//     props: {},
//   };
// }



export default function Resume() {

  const [content, setContent] = useState<jsonFileContent | null>(null);
  //console.log('Printing content: ', content)

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
      //console.log(data.resume)
      setContent(data.resume); // Update state with fetched data
    })
    .catch((error) => {
    console.error("Error fetching projects:", error);
    });
}, []);

  //console.log("What's up in the content: ", content)

  if(!content) {
    return <Typography variant="h5">Loading resume...</Typography>;    
  }

  const workexData = content?.workex;

  const handleDownload = () => {
    // Replace this URL with your actual resume PDF URL
    const fileUrl = '/Utkarsh_Khandelwal_Resume_Feb_2025.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Utkarsh_Khandelwal_Resume.pdf'; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <Box sx={{ backgroundColor: "", paddingLeft: 2, paddingRight: 2}}>
        {/* Add the download button container */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          paddingBottom: 2,
          paddingTop: 1
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
            }}
          >
            Download Resume
          </Button>
        </Box>

        <Box sx={{paddingBottom: 2}}>
          <Typography variant="h5" sx={{paddingBottom: 2}}>
            Work Experience
          </Typography>
          <WorkExDetailsComponent companies={workexData}/>
        </Box>

        <Divider/>

        <Box sx={{paddingBottom: 2}}>
          <Typography variant="h5" sx={{paddingBottom: 2}}>
            Education
          </Typography>
          <Typography variant="h6">New York Univeristy- Courant Institute of Mathematical Sciences</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 0, backgroundColor: ""}}> M.S. in Scientific Computing</Typography>
          <Typography sx={{ paddingBottom: 1, color: 'text.secondary', mb: 1.5, backgroundColor: ""}}> 2021 -- 2023</Typography>

          <Typography variant="h6">Indian Institute of Technology (BHU) Varanasi</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 0, backgroundColor: ""}}> B.Tech. in Mechanical Engineering</Typography>
          <Typography sx={{ paddingBottom: 1, color: 'text.secondary', mb: 1.5, backgroundColor: ""}}> 2014 -- 2018</Typography>

        </Box>

      </Box>
  );
}