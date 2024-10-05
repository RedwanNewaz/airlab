import React from 'react'
import { Box, Grid2, Stack, Typography } from '@mui/material'; // Import Grid from Material-UI

export default function Footer() {
  return (
    <div style={{backgroundColor: 'rgb(185, 192, 198)', height: '100px', margin: 0}}>
      <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
        {/* <Copyright>�� 2022 MyCompany. All rights reserved.</Copyright> */}
        <Typography
            variant="h2"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AIRLAB
          </Typography>
        <p style={{textAlign:'center'}}>&copy; 2024 Air Lab. All rights reserved.</p>
        <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UNIVERSITY OF NEW ORLEANS
            {/* AIRLAB */}
          </Typography>
      </Stack>
    </div>
  )
}
