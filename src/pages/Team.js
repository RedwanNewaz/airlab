import React from 'react';
import HeroContainer from '../components/HeroContainer';
import { Box, Grid2 } from '@mui/material'; // Import Grid from Material-UI
import teamData from '../constants/data/teamData';
import TeamMemberCard from '../components/TeamMemberCard';

export default function Team() {
  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={'Current Team Members'} subtitle={'We are a group of enthusiasts interested in Robotics, Machine Learning, Computer Vision and many more'}/>
      <Box sx={{ px: '10%', py: '5%' }}>
        <Grid2 container spacing={2}>
          {teamData.map((member) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={member.id}>
              <TeamMemberCard memberData={member} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
}
