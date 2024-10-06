import React from 'react';
import VideoHeroContainer from '../components/VideoHeroContainer';
import Stack from '@mui/material/Stack';
import { Typography, Box } from '@mui/material';
import { homeData } from '../constants/data/homeData';
import { heroHome } from '../constants/data/heroImageData';
import HeroContainer from '../components/HeroContainer';

export default function Home() {
  return (
    <Box className="full-height-width">
      {/* <VideoHeroContainer title={heroHome.title} subtitle={heroHome.subtitle}/> */}
      <HeroContainer title={heroHome.title} subtitle={heroHome.subtitle}/>
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '2%'}}>
        <Stack spacing={2} sx={{ width: '70%', py: '2rem'}}>
          {homeData && homeData.map((item, index) => (
            <Box key={index} sx={{ 
                padding: '1.5rem', 
                borderRadius: '8px', 
                bgcolor: 'white', 
                boxShadow: 2, 
              }}>
              <Typography sx={{ marginTop: '0.5rem' }}>
                {item.content}
              </Typography>
            </Box>
          ))}
        </Stack>
      </div>
    </Box>
  );
}
