import { Typography, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface WCardProps {
    cardHeading: string;
    date: string;
    introContent: string;
    linkToArticle?: string;
    keywords? :string[];
    sx? : any;

}


export default function BasicCard({cardHeading, date, introContent, linkToArticle, keywords, sx} : WCardProps) {


    const KeywordChips = (
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{mb: 2, backgroundColor: ""}}>
          {keywords?.map((keyword, index) => (
            <Chip key={index} label={keyword} />
          ))}
        </Stack>
      );


    return (
        <Box sx={sx}>
            <Card sx={{paddingLeft: {sm: 2}, paddingRight: {sm: 2}, backgroundColor: ""}}>
            <CardContent sx={{backgroundColor: ""}}>
                <Typography variant="h6" component="div" sx={{backgroundColor: ""}}>
                    {cardHeading}
                </Typography>
                <Typography sx={{ paddingBottom: 1, color: 'text.secondary', mt: 0.5, mb: 0.5, backgroundColor: ""}}> {date}</Typography>

                {KeywordChips}

                <Typography variant="body2" sx={{backgroundColor: ""}}>
                    {introContent}
                </Typography>
            </CardContent>
        <Divider />

      <CardActions>
        <Button size="small" href={linkToArticle || "/"} target="_blank" color='inherit'>Read More <OpenInNewIcon fontSize='inherit'/></Button>
      </CardActions>

    </Card>
    </Box>
  );
}