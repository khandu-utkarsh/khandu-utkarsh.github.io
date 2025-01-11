"use client"

import { Typography, Box, Divider} from '@mui/material';
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
    <Typography variant="subtitle1" color="text.secondary" sx={{ paddingBottom: 1, backgroundColor: ""}}> {location} | {startDate} -- {endDate}</Typography>
    {roleDesc.map((duty, index) => (
      <Typography key={index} sx={{paddingBottom: 1, backgroundColor: ""}}>
        {duty}
      </Typography>
    ))}
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
        <Typography sx={{ paddingBottom: 1, color: 'text.secondary', mb: 1.5, backgroundColor: ""}}> M.S. in Scientific Computing, 2021 -- 2023</Typography>
        {/* <Typography variant="subtitle1">Coureses</Typography>  */}

        <Typography variant="h6">Indian Institute of Technology (BHU) Varanasi</Typography>
        <Typography sx={{ paddingBottom: 1, color: 'text.secondary', mb: 1.5, backgroundColor: ""}}> B.Tech. in Mechanical Engineering, 2014 -- 2018</Typography>
          {/* <Typography variant="subtitle1">Coureses</Typography>  */}

      </Box>

      </Box>
  );
}



          {/* <CompanyInfo companyName={resume.workex.company1.name} location="">
            <RoleAndDescription roleHeading={resume.workex.company1.roles.role1.title} 
                                location={resume.workex.company1.roles.role1.location}
                                startDate={resume.workex.company1.roles.role1.startDate}
                                endDate={resume.workex.company1.roles.role1.endDate}
                                roleDesc={resume.workex.company1.roles.role1.desc} />
            <RoleAndDescription roleHeading={resume.workex.company1.roles.role2.title} 
                                          location={resume.workex.company1.roles.role2.location}
                                          startDate={resume.workex.company1.roles.role2.startDate}
                                          endDate={resume.workex.company1.roles.role2.endDate}
           
            roleDesc={resume.workex.company1.roles.role2.desc} />
          </CompanyInfo>

          <CompanyInfo companyName={resume.workex.company2.name} location="">
            <RoleAndDescription roleHeading={resume.workex.company2.roles.role1.title} 
                                            location={resume.workex.company2.roles.role1.location}
                                            startDate={resume.workex.company2.roles.role1.startDate}
                                            endDate={resume.workex.company2.roles.role1.endDate}
            roleDesc={resume.workex.company2.roles.role1.desc} />
            <RoleAndDescription roleHeading={resume.workex.company2.roles.role2.title} 
                                                        location={resume.workex.company2.roles.role2.location}
                                                        startDate={resume.workex.company2.roles.role2.startDate}
                                                        endDate={resume.workex.company2.roles.role2.endDate}
            roleDesc={resume.workex.company2.roles.role2.desc} />
          </CompanyInfo>
        </Box>
 */}