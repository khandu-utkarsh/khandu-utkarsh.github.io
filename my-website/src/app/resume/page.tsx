"use client"

const resume = {
  "workex" : {
      "company1" : {
          "name" : "Dassault Systemes",
          "roles" : {
              "role1" : {
                  "title" : "3DExperience SOLIDWORKS Drafting & MBD Software Engineering Manager",
                  "location": "Waltham, MA",
                  "startDate": "Aug 2024",
                  "endDate": "curr",
                  "desc": [
                    "Conducted research on mesh datasets and experimented with different approaches to enhance mesh quality post-boolean operations. Developed and implemented enhancements to the offsetting algorithm, resulting in improved mesh quality.",
                    "Contributed to maintaining the legacy code by templatizing C++ code and creating component libraries."
                  ]
              },
              "role2" : {
                  "title" : "SIMULIA Software Engineering Manager",
                  "location": "Bangalore",
                  "startDate": "June 2023",
                  "endDate": "July 2024",
                  "desc": [
                    "I am involved in the research and development of SIMULIA suite of products, which provide simulation solutions for various engineering and multiphysics problems.",
                    "My primary focus is on advancing computational geometry algorithms for 3D surface modeling and mesh processing in PowerFLOW and PowerDELTA.",
                    "Conducted research on mesh datasets and experimented with different approaches to enhance mesh quality post-boolean operations. Developed and implemented enhancements to the offsetting algorithm, resulting in improved mesh quality.",
                    "Contributed to maintaining the legacy code by templatizing C++ code and creating component libraries."
                  ]
              }
          }
      },
      "company2" : {
          "name" : "Altair",
          "roles" : {
              "role1" : {
                  "title" : "Software Engineer",
                  "location": "Bangalore",
                  "startDate": "Dec 2018",
                  "endDate": "May 2021",
                  "desc": [
                      "asdascas asdcasd asasdc hgto wefkl sgfl",
                      "sdf sd sd sdc sdfwefge erga rhy wwerg  sdv"
                  ]
              },
              "role2" : {
                  "title" : "Software Trainee",
                  "location": "Bangalore",
                  "startDate": "July 2018",
                  "endDate": "Nov 2018",
                  "desc": [
                      "asfc sd lkth pifdg poasxc bndf sdw",
                      "asdascas asdcasd sdasasdc hgto wefkl sgfl",
                      "sdf sd sd sdc sdfwefge erga rhy wwerg  sdv"
                  ]
              }
          }
      }
  },
  "education" : {
      "college1" : {
          "name" : "New York Univeristy",
          "degree": "MS in Scientific Computing",
          "startDate" : "Sept 2021",
          "endDate" : "May 2023",
          "coursesStudied": [
              "ml", "nme", "calc"
          ],
          "student jobs": [
              "TA for this in sdvsdv",
              "TA and Grader for dfbvd in adsfcasd"
          ] 
      },
      "college2" : {
          "name" : "IIT (BHU) Varanasi",
          "degree": "MS in Scientific Computing",
          "startDate" : "Sept 2021",
          "endDate" : "May 2023",
          "coursesStudied": [
              "ml", "nme", "calc"
          ],
          "student jobs": [
              "TA for this in sdvsdv",
              "TA and Grader for dfbvd in adsfcasd"
          ] 
      }
  }
}



import { Typography, Box, Divider} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Children, useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

type RoleAndDescriptionProps = {
  roleHeading: string;
  location: string;
  startDate: string;
  endDate: string;
  roleDesc: string[];
};
function RoleAndDescription({roleHeading, location, startDate, endDate, roleDesc} : RoleAndDescriptionProps) {
  return (
    <Box sx={{paddingBottom: 2}}>
    <Typography variant="h6" color="text.secondary" sx={{backgroundColor: ""}}> {roleHeading}</Typography>
    <Typography variant="subtitle1" color="text.secondary" sx={{ paddingBottom: 1, backgroundColor: ""}}> {location} | {startDate} -- {endDate}</Typography>
    {roleDesc.map((duty, index) => (
      <Typography key={index} sx={{paddingBottom: 1, backgroundColor: ""}}>
        {/* <CircleIcon fontSize='inherit' color='inherit'/> */}
        {duty}
      </Typography>
    ))}
    </Box>
  )
}

type CompanyInfoProps = {
  companyName: string;
  location: string;
}
function CompanyInfo({companyName, location, children} : React.PropsWithChildren<CompanyInfoProps>) {
  return (
    <Box sx={{backgroundColor: "", paddingBottom: 2}}>
    <Typography variant="h6" sx={{paddingBottom: 2}}>{companyName}</Typography>
      <Box sx={{}}>
      {children}
      </Box>

    </Box>
  )
}



export default function Resume() {

  const [content, setContent] = useState(null);

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
      setContent(data.resume); // Update state with fetched data
    })
    .catch((error) => {
    console.error("Error fetching projects:", error);
    });
}, []);

  return (
      <Box sx={{ backgroundColor: "", paddingLeft: 2, paddingRight: 2}}>


      <Box sx={{paddingBottom: 2}}>
          <Typography variant="h5" sx={{paddingBottom: 2}}>
            Work Experience
          </Typography>
          <CompanyInfo companyName={resume.workex.company1.name} location="">
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
