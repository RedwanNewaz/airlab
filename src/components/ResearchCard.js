import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid2";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ResearchCard({ researchData }) {
  return (
    <div style={{ width: "100%", height: "500px"}}>
      <Card
        sx={{
          width: 350,
          maxWidth: '100%',
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
            height="220"
            image={require("../constants/images/profile.png")}
            alt="Profile"
          />
          <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
            <Grid container spacing={12}>
              <Grid size={12}>
                <Typography gutterBottom variant="h6" component="div">
                  {researchData.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {researchData.desc}
                </Typography>
              </Grid>
              <Grid size={12} sx={2}>
                <Stack direction="row" rowGap={1} justifyContent={'center'} spacing={1} width={'100%'} flexWrap={'wrap'}>
                  {researchData.tags &&
                    researchData.tags.map((tag) => {
                      return <Chip label={tag} size="small"/>;
                    })}
                </Stack>
                <div>{researchData.publishedDate}</div>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
