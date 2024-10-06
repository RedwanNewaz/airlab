import React from 'react';
import { Box, Grid2, Stack, Typography, Avatar, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'rgb(60, 60, 60)', py: 4, color: 'white' }}>
      <Grid2 container spacing={3} justifyContent="space-around" alignItems="center">

        <Grid2 item xs={12} sm={6} md={4} display="flex" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Avatar
            alt="Air Lab Logo"
            src="/path/to/airlab-logo.png"
            sx={{ width: 64, height: 64, mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}
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
          </Stack>
        </Grid2>


        <Grid2 item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Connect with Us
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <IconButton href="https://github.com/RedwanNewaz/" target="_blank" color="inherit">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/abdullah-al-redwan-newaz-5ba849130/" target="_blank" color="inherit">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="mailto:aredwann@uno.com" color="inherit">
              <EmailIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Grid2>


        <Grid2 item xs={12} sm={6} md={4} display="flex" alignItems='center' justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Avatar
            alt="UNO Logo"
            src={require("../assets/images/uno-logo.jpg")}
            sx={{ width: 64, height: 64, mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}
          />
          <Stack spacing={1} >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                textAlign: 'center',
              }}
            >
              UNIVERSITY OF NEW ORLEANS
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              &copy; 2024 Air Lab. All rights reserved.
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
}
