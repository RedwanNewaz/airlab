import React from "react";
import VideoHeroContainer from "../components/VideoHeroContainer";
import { Typography, Box, Stack } from "@mui/material";
import { homeData } from "../constants/data/homeData";
import { heroHome } from "../constants/data/heroImageData";
import HeroContainer from "../components/HeroContainer";
import { newsData } from "../constants/data/newsData";
import TopNews from "../components/TopNews";

export default function Home() {
  const topNews = newsData.slice(0, 5);

  return (
    <Box className="full-height-width flex-column-no-gap">
      {/* <VideoHeroContainer title={heroHome.title} subtitle={heroHome.subtitle}/> */}
      <HeroContainer title={heroHome.title} subtitle={heroHome.subtitle} />
      <div
        style={{
          width: "98%",
          display: "flex",
          justifyContent: "space-evenly",
          margin: "flex-start",
          gap: '10px',
          // paddingLeft: "2%",
        }}
      >
        <Stack spacing={2} sx={{ width: "70%", py: "2rem" }}>
          {homeData &&
            homeData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  padding: "1.5rem",
                  borderRadius: "8px",
                  bgcolor: "white",
                  boxShadow: 2,
                }}
              >
                <Typography sx={{ marginTop: "0.5rem" }}>
                  {item.content}
                </Typography>
              </Box>
            ))}
        </Stack>

        <div style={{width: '25%'}}>
          <TopNews />
        </div>
      </div>
    </Box>
  );
}
