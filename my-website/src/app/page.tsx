import { Typography, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function Home() {
  return (
      <Box sx={{}}>
        <Typography variant="body1" align="justify">
          Hi, I'm <b>Utkarsh Khandelwal</b>, an engineer and wannabe mathematician.
        </Typography>

        <Typography variant="body1" align="justify" sx={{ paddingTop: 2}}>
          I am currently exploring my interests in software systems and technology, while also nurturing a love for biking and urban life.
        </Typography>

        <Typography variant="body1" align="justify" sx={{ paddingTop: 2}}>
          Professionally, I have about five years of experience developing software, particularly for CAD and multiphysics simulation tools. My contributions range from designing low-level boolean operation algorithms to creating features for both native and web applications.
        </Typography>

        <Typography variant="body1" align="justify" sx={{ paddingTop: 2}}>
          I am an outdoor enthusiast with a particular love for biking, an activity I've enjoyed continuously since 
          childhood. One of my favorite memories is a 110 km ride from Bellandur in Bangalore to Bangalore Airport in 2019. 
          The airport staff were shocked to see us, as there was no bike parking. It was my first long ride, I had 
          no muscle endurance, and the day was unusually hot for Bangalore's typical weather. However, the wonderful 
          eateries at the airport made the whole journey worthwhile.
        </Typography>

        <Typography variant="body1" align="justify"  sx={{ paddingTop: 2}}>
          Currently, I reside in Cambridge, Massachusetts, and love the summers here. The bright sunny days, short drives to beaches, and proximity to my favorite city, NYC, make it an ideal place to live.
        </Typography>
      </Box>
  );
}
