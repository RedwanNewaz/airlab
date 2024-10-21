import React from "react";
import { useMediaQuery, Box } from "@mui/material";

export default function VideoCard({ video }) {
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        position: "relative",
        padding: isSmallScreen ? "8px" : "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        border: "3px solid #1976d2",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.02)",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <iframe
        width={isSmallScreen ? "300" : isMediumScreen ? "400" : "500"}
        height={isMediumScreen ? "300" : "400"}
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          borderRadius: "8px",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.15)",
        }}
      ></iframe>
    </Box>
  );
}
