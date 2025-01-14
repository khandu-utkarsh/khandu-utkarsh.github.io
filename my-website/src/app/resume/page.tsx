"use client"

import { Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Children, useEffect, useState } from 'react';


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

// type WorkEx = {
//   companies : CompanyInfo[]
// }




type jsonFileContent = {
  workex : CompanyInfo[];
  education: any;
}

function RoleDetailsComponent({roleHeading, location, startDate, endDate, roleDesc} : RoleInfo) {
  //console.log("In the roleDetails comp: ", roleHeading, location, startDate, endDate, roleDesc);
  return (
    <Box sx={{paddingBottom: 2}}>
    <Typography variant="h6" color="text.secondary" sx={{backgroundColor: ""}}> {roleHeading}</Typography>
    <Typography variant="subtitle1" color="text.secondary" sx={{ paddingBottom: 1, backgroundColor: ""}}> {location} | {startDate} - {endDate}</Typography>

    <List sx={{paddingTop: 0, paddingBottom: 0, backgroundColor: ""}}>
{roleDesc.map((duty, index) => (
  <ListItem sx={{paddingTop: 0, paddingBottom: 0, backgroundColor: "", alignItems:"flex-start"}}>
                  <ListItemIcon sx={{minWidth: 40}}>
          <ArrowRightAltIcon />
        </ListItemIcon>
    <ListItemText sx={{margin: {xs:0, sm: 0}}}primary={
      <>
      {duty}
      </>

      
      
      } />
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
      <Typography variant="h6" sx={{paddingBottom: 2}}>{name}</Typography>
      {
        roles.map((role, index) => (
          <RoleDetailsComponent 
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
          <CompanyDetailsComponent name={company.name} url={company.url} roles={company.roles}/> 
        ))
      }
    </>    
  )
}



export default function Resume() {

  const [content, setContent] = useState<jsonFileContent | null>(null);

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

      const resumeData = data.resume;
      setContent(data.resume); // Update state with fetched data
    })
    .catch((error) => {
    console.error("Error fetching projects:", error);
    });
}, []);

  console.log("What's up in the content: ", content)

  if(!content) {
    return <Typography variant="h5">Loading resume...</Typography>;    
  }

  let workexData = content?.workex;
  console.log("What's up in the workexData: ", workexData)


  return (
      <Box sx={{ backgroundColor: "", paddingLeft: 2, paddingRight: 2}}>


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