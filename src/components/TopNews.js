import { useEffect, useState } from "react";
import { Box, Stack, Typography, Slide, Button } from "@mui/material";
import { newsData } from "../constants/data/newsData";
import { Link } from "react-router-dom";

export default function TopNews() {
  const topNews = newsData.slice(0, 5);

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        height: "fit-content",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          py: '0.5rem',
          fontWeight: "bold",
          color: "#2C3E50",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Top News
      </Typography>
      <Stack spacing={1}>
        {topNews.map((newsItem, index) => (
          <Slide
            key={newsItem.id}
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={(index + 1) * 400}
          >
            <Link
              to={`/news#news-item-${index}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  backgroundColor: "#ECF0F1",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#3498DB",
                    color: "#FFFFFF",
                    transform: "scale(1.02)",
                  },
                }}
              >
                {newsItem.title}
              </Typography>
            </Link>
          </Slide>
        ))}
        <Slide
          key={-1}
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={6 * 400}
        >
          <Link to="/news">
            <Button>More News...</Button>
          </Link>
        </Slide>
      </Stack>
    </Box>
  );
}
