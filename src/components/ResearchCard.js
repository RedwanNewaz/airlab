import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid2 from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from '@mui/material';


export default function ResearchCard({ researchData }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Media query for small screens

  return (
    <div style={{ width: '100%', height: '500px', display:"flex", justifyContent:"center", alignItems:'center'}}>
      <Card
        sx={{
          width: isSmallScreen ? '550px' : 400, // Adjust width based on screen size
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
        <CardMedia
            component="img"
            sx={{
              height: isSmallScreen ? 260 : 220,
              objectFit: 'cover',
            }}
            image={require('../assets/images/profile.png')}
            alt="Profile"
          />
          <CardContent sx={{ flexGrow: 1, overflow: "auto" }}>
            <Grid2 container spacing={isSmallScreen ? 6: 12}>
              <Grid2 size={12}>
                <Typography gutterBottom variant="h6" component="div">
                  {researchData.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {researchData.desc}
                </Typography>
              </Grid2>
              <Grid2 size={12} sx={2}>
                <Stack
                  direction="row"
                  rowGap={1}
                  justifyContent={"center"}
                  spacing={1}
                  width={"100%"}
                  flexWrap={"wrap"}
                >
                  {researchData.tags &&
                    researchData.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" />
                    ))}
                </Stack>
                <div>{researchData.publishedDate}</div>
              </Grid2>
            </Grid2>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
