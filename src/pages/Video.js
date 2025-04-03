import React from "react";
import HeroContainer from "../components/HeroContainer";
import {
  Box,
  Grid2,
  useMediaQuery,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { heroVideo } from "../constants/data/heroImageData";
import { videoData } from "../constants/data/videoData";
import VideoCard from "../components/VideoCard";

export default function Video() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroVideo.title} subtitle={heroVideo.subtitle} />
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "inherit",
        }}
      >

        <Grid2 container spacing={isSmallScreen ? 2 : 3} justifyContent="center">
          {videoData.map((video, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <VideoCard key={video} video={video} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
}
