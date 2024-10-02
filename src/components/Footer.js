import React from 'react'
import { Box, Grid2 } from '@mui/material'; // Import Grid from Material-UI

export default function Footer() {
  return (
    <div style={{backgroundColor: 'cyan', height: '100px', margin: 0}}>
      <Grid2>
        {/* <Copyright>�� 2022 MyCompany. All rights reserved.</Copyright> */}
        <p>&copy; 2024 Air Lab. All rights reserved.</p>
      </Grid2>
    </div>
  )
}
