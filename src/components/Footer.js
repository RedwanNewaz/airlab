import React from 'react';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import ProfileLinks from './ProfileLinks';
import { labInfo } from '../constants/data/linkData';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'rgb(60, 60, 60)', py: 4, color: 'white' }}>
      <Grid2 container spacing={3} justifyContent="space-around" alignItems="center">

        <Grid2 item xs={12} sm={6} md={4} display="flex" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Box
            component="img"
            alt="AiR Lab Logo"
            src={require("../assets/images/airlab-logo.png")}
            sx={{
              height: 64,
              width: 'auto',
              objectFit: 'contain',
              backgroundColor: '#fff',
              borderRadius: '10px',
              p: '4px',
              mr: { xs: 0, md: 2 },
              mb: { xs: 2, md: 0 },
            }}
          />
          <Stack alignItems='center' spacing={1} textAlign='left'>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
              }}
            >
              AIRLAB
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              Revolutionizing robotics research.
            </Typography>
            <Stack spacing={0} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {labInfo.addressLines.map((line) => (
                <Typography key={line} variant="body2" sx={{ color: '#b0b0b0' }}>
                  {line}
                </Typography>
              ))}
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                {labInfo.email}
              </Typography>
            </Stack>
          </Stack>
        </Grid2>


        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Connect with Us
          </Typography>
          <ProfileLinks />
        </Grid2>


        <Grid2 item xs={12} sm={6} md={4} display="flex" alignItems='center' justifyContent="center">
          <Stack spacing={1.5} alignItems="center">
            <Box
              component="img"
              alt="LSU New Orleans"
              src={require("../assets/images/lsu-new-orleans-logo.png")}
              sx={{
                height: { xs: 56, md: 68 },
                width: 'auto',
                display: 'block',
              }}
            />
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              &copy; {new Date().getFullYear()} AiR Lab. All rights reserved.
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
}
