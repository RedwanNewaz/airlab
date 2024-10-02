import React from 'react'
import HeroContainer from '../components/HeroContainer'
import { Box, Grid2 } from '@mui/material'
import { researchData, tags } from '../constants/data/researchData'
import ResearchCard from '../components/ResearchCard'

export default function Research() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <HeroContainer title={'Research'} subtitle={'We work on making autonmous systems'}/>
      <Box sx={{ px: '10%', py: '5%' }}>
        <Grid2 container spacing={2}>
          {researchData.map((research) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={research.id}>
              <ResearchCard researchData={research} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  )
}
