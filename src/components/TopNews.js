import { Box, Stack, Typography, Slide, Button } from "@mui/material";
import { newsData } from "../constants/data/newsData";
import { Link } from "react-router-dom";

export default function TopNews() {
  const topNews = newsData.slice(-5).reverse();

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff", // Changed to white for a cleaner look
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)", // Enhanced shadow for depth
        border: "1px solid #e0e0e0",
        overflow: "hidden", // Ensures rounded corners are visible
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          py: '0.75rem', // Increased padding for better spacing
          fontWeight: "bold",
          color: "#2C3E50",
          textAlign: "center",
          backgroundColor: "#3498DB", // Header background for contrast
          color: "#FFFFFF", // White text for header
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
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
            style={{padding: "0 2rem"}}
          >
            <Link
              to={`/news#news-item-${index}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  padding: "12px", // Added padding for better click area
                  cursor: "pointer",
                  borderRadius: "4px",
                  backgroundColor: "#ECF0F1",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  fontWeight: "medium", // Added medium weight for better text visibility
                  "&:hover": {
                    backgroundColor: "rgb(60, 60, 60)", // Darker blue for hover effect
                    color: "#FFFFFF", // White text on hover
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Slight shadow on hover
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
          <Link to="/news" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                margin: "0.75rem", // Added margin for spacing
                backgroundColor: "#3498DB", // Consistent button color
                color: "#FFFFFF", // White text
                "&:hover": {
                  backgroundColor: "#2980B9", // Darker blue for hover
                },
              }}
            >
              More News...
            </Button>
          </Link>
        </Slide>
      </Stack>
    </Box>
  );
}
