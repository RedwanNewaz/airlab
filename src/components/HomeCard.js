import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid2 from "@mui/material/Grid2";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function HomeCard({ homeCardData }) {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // For screens smaller than 600px
  const isLaptop = useMediaQuery("(max-width:1189px)"); // For medium screens (e.g., tablets)
  const isMediumScreen = useMediaQuery('(max-width:900px)'); // For medium screens (e.g., tablets)

  const navigate = useNavigate(); // Initialize the navigate function

  const navigateToPage = () => {
    navigate(`/about/${homeCardData.title.toLowerCase().replace(/\s/g, "-")}`); 
  };

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Card
        sx={{
            width: isSmallScreen ? '90%' : isMediumScreen ? '90%' : isLaptop ? 900: 400, // Adjust width based on screen size
            height: isSmallScreen ? "auto" : "450px", // Full height on larger screens
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
          onClick={navigateToPage}
        >
          <CardMedia
            component="img"
            sx={{
              height: isLaptop ? 300 : isSmallScreen ? 180 : 220, // Adjust width based on screen size
              width: "100%",
              objectFit: "cover",
            }}
            image={
              homeCardData.image
                ? require(`../assets/images/${homeCardData.image}`)
                : require("../assets/images/profile.png")
            }
            alt="Profile"
          />
          <CardContent
            sx={{ flexGrow: 1, padding: isSmallScreen ? "16px" : "24px" }}
          >
            <Grid2 container spacing={isSmallScreen ? 2 : 3}>
              <Grid2 size={12}>
                <Typography
                  gutterBottom
                  variant={isSmallScreen ? "h6" : "h5"}
                  component="div"
                  sx={{ textAlign: isSmallScreen ? "center" : "left" }} // Center text on small screens
                >
                  {homeCardData.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: isSmallScreen ? "center" : "left",
                  }}
                >
                  {homeCardData.subtitle}
                </Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
