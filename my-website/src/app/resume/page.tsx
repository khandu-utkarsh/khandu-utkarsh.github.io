import { Typography, Box, Divider} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


//Add section wise nativagation menu on the side.


export default function Home() {
  return (
      <Box sx={{ backgroundColor: "" }}>
        <Typography variant="h4">
            Education            
        </Typography>

        <Typography variant="h5">NYU - Courant Insti</Typography>
        <Typography variant="h6">MS in Scientific Computing</Typography> 
        <Typography variant="subtitle1">Coureses</Typography> 

        <Typography variant="h6">IIT (BHU)</Typography>
        <Typography variant="h6">B.Tech in Mechanical Engineering</Typography>        
        <Typography variant="subtitle1">Coureses</Typography> 

        <Divider/>
        <Typography variant="h4">
            Work Experience
        </Typography>

        <Typography variant="h5">Dassault Systemes</Typography>
        <Typography variant="h6">MBD Drating Software Engineering Manager</Typography> 
        <Typography variant="body1" align="justify" sx={{ paddingTop: 2, paddingLeft: 10, paddingRight: 10 }}>
          I am an outdoor enthusiast with a particular love for biking, an activity I've enjoyed continuously since 
          childhood. One of my favorite memories is a 110 km ride from Bellandur in Bangalore to Bangalore Airport in 2019. 
          The airport staff were shocked to see us, as there was no bike parking. It was my first long ride, I had 
          no muscle endurance, and the day was unusually hot for Bangalore's typical weather. However, the wonderful 
          eateries at the airport made the whole journey worthwhile.
        </Typography>

        <Typography variant="h6">SIMULIA Software Engineering Manager</Typography> 
        <Typography variant="body1" align="justify" sx={{ paddingTop: 2, paddingLeft: 10, paddingRight: 10 }}>
          I am an outdoor enthusiast with a particular love for biking, an activity I've enjoyed continuously since 
          childhood. One of my favorite memories is a 110 km ride from Bellandur in Bangalore to Bangalore Airport in 2019. 
          The airport staff were shocked to see us, as there was no bike parking. It was my first long ride, I had 
          no muscle endurance, and the day was unusually hot for Bangalore's typical weather. However, the wonderful 
          eateries at the airport made the whole journey worthwhile.
        </Typography>


        <Typography variant="h5">Altair</Typography>
        <Typography variant="h6">SIMULIA Software Engineering Manager</Typography> 
        <Typography variant="body1" align="justify" sx={{ paddingTop: 2, paddingLeft: 10, paddingRight: 10 }}>
          I am an outdoor enthusiast with a particular love for biking, an activity I've enjoyed continuously since 
          childhood. One of my favorite memories is a 110 km ride from Bellandur in Bangalore to Bangalore Airport in 2019. 
          The airport staff were shocked to see us, as there was no bike parking. It was my first long ride, I had 
          no muscle endurance, and the day was unusually hot for Bangalore's typical weather. However, the wonderful 
          eateries at the airport made the whole journey worthwhile.
        </Typography>
      </Box>
  );
}
