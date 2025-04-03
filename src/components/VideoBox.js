import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { videoData } from "../constants/data/videoData";

export default function VideoBox({ aboutData }) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:1280px)");
  const isSmallScreen = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.offsetWidth;
        const contentWidth = scrollRef.current.scrollWidth;
        setCanScroll(contentWidth > containerWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, [aboutData.relatedVideos]);


  const relatedVideos = videoData.filter(item => aboutData.relatedVideos.includes(item.id));

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "90%",
        overflowX: "hidden",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "16px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Related Videos
      </Typography>

      {canScroll && (
        <IconButton
          onClick={() => {
            isSmallScreen
              ? scroll(-scrollRef.current.scrollWidth / aboutData.relatedVideos.length)
              : isMediumScreen
              ? scroll(-(scrollRef.current.scrollWidth * 0.9) / aboutData.relatedVideos.length)
              : scroll(-300);
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            transform: "translateY(-50%)",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          width: "100%",
          paddingBottom: "10px",
          gap: "16px",
        }}
      >
        {relatedVideos.map((video, index) => {
          return (
            <iframe
              key={index}
              width={isSmallScreen ? "100%" : isMediumScreen ? "80%" : "400"}
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title="YouTube video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                flexShrink: 0,
                borderRadius: "8px",
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.15)",
                border: "2px solid black", // Light blue border
              }}
            ></iframe>
          )
        })}
      </Box>

      {canScroll && (
        <IconButton
          onClick={() => {
            isSmallScreen
              ? scroll(scrollRef.current.scrollWidth / aboutData.relatedVideos.length)
              : isMediumScreen
              ? scroll((scrollRef.current.scrollWidth * 0.9) / aboutData.relatedVideos.length)
              : scroll(300);
          }}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            transform: "translateY(-50%)",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}
