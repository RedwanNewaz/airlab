import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MemberModal from './MemberModal';
import { useMediaQuery } from '@mui/material';

export default function TeamMemberCard({ memberData }) {
  const [openModal, setOpenModal] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Media query for small screens

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div style={{ width: '100%', height: '100%', display:"flex", justifyContent:"center", alignItems:'center'}}>
      <Card
        sx={{
          width: isSmallScreen ? '550px' : 300, // Adjust width based on screen size
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 3,
        }}
      >
        <CardActionArea
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
          onClick={handleModal}
        >
          <CardMedia
            component="img"
            sx={{
              height: isSmallScreen ? 320 : 220,
              objectFit: 'cover',
            }}
            image={memberData.photo ? require('../assets/images/'+memberData.photo) : require('../assets/images/profile.png')  }
            alt="Profile"
          />
          <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography
              gutterBottom
              variant={'h5'}
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              {memberData.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontSize: '1rem' }}
            >
              {memberData.position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {openModal && <MemberModal handleModal={handleModal} memberData={memberData} />}
    </div>
  );
}
