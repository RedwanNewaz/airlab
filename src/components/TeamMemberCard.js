import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function TeamMemberCard({ memberData }) {
  return (
    <Card sx={{ width: '100%', width: 250, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,width: '100%', height: '100%'}}>
        <CardMedia
          component="img"
          height="220"
          image={require('../constants/images/profile.png')}
          alt="Profile"
        />
        <CardContent sx={{ flexGrow: 1 }}> {/* Allow CardContent to grow */}
          <Typography gutterBottom variant="h6" component="div">
            {memberData.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {memberData.position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
