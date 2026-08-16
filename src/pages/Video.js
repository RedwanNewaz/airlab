import React, { useEffect } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import { heroVideo } from "../constants/data/heroImageData";
import { videoData, videoGroups } from "../constants/data/videoData";
import VideoCard from "../components/VideoCard";

export default function Video() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keep the declared order, then append any group that was added to the data
  // without being listed in videoGroups.
  const groups = [
    ...videoGroups,
    ...videoData
      .map((v) => v.group || "Other")
      .filter((g) => !videoGroups.includes(g)),
  ].filter((g, i, arr) => arr.indexOf(g) === i);

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroVideo.title} subtitle={heroVideo.subtitle} />

      <Box sx={{ px: { xs: "5%", sm: "8%" }, py: { xs: "6%", sm: "4%" } }}>
        <Stack spacing={6}>
          {groups.map((group) => {
            const items = videoData.filter((v) => (v.group || "Other") === group);
            if (items.length === 0) return null;

            return (
              <Stack key={group} spacing={3}>
                <Stack spacing={1} sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#2C3E50", fontWeight: "bold" }}
                  >
                    {group}
                  </Typography>
                  <Divider />
                </Stack>

                <Grid2 container spacing={3}>
                  {items.map((video) => (
                    <Grid2 key={video.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      <VideoCard video={video} />
                    </Grid2>
                  ))}
                </Grid2>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}
