import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import {
  Box,
  Stack,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { newsData } from "../constants/data/newsData";
import HeroContainer from "../components/HeroContainer";
import CustomAutoComplete from "../components/CustomAutoComplete";

export default function News() {
  const [news, setNews] = useState(newsData);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the specific news item using hash
    const hash = location.hash;
    if (hash) {
      const anchor = document.getElementById(hash.slice(1)); // Remove '#' from hash
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start',inline: 'nearest'  });
      }
    }
  }, [location.hash]);



  const filterNewsByTitle = (event, title) => {
    if (!title) {
      setNews(newsData); // Reset to original news data
      return;
    }
    const filteredNews = newsData.filter((newsMap) => newsMap.title === title);
    setNews(filteredNews);
  };
  

  return (
    <div className="full-height-width flex-column-no-gap">

      <HeroContainer
        title={"Latest News & Updates"}
        subtitle={
          "Stay informed with our most recent announcements and activities."
        }
      />

      {/* Main News Section */}
      <Stack
        marginX={"auto"}
        marginTop={{ xs: "4%", sm: "2%" }}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        spacing={4}
        width="80%"
      >
        <CustomAutoComplete
          data={newsData}
          filterData={filterNewsByTitle}
          textFieldLabel={"Search News By Title"}
        />
      </Stack>

      <Box sx={{ px: { xs: "5%", sm: "10%" }, py: { xs: "5%", sm: "5%" } }}>
        {news.map((newsItem, index) => (
          <Accordion
            key={index}
            id={`news-item-${index}`}
            defaultExpanded
            sx={{
              position: "relative",
              scrollMarginTop: "72px",
              borderLeft: "8px solid #1976d2",
              borderRadius: "13px !important",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon sx={{ color: "#fff" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: "rgb(75, 75, 75)",
                "& .MuiAccordionSummary-content": {
                  margin: "12px 0",
                },
                color: "#fff",
                padding: "0 16px",
                borderRadius: "8px 8px 0 0", // Rounded corners on top
                position: "relative",
                zIndex: 1, // Ensure this is above the pseudo-element
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                {newsItem.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                textAlign: "left",
                padding: "16px",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#424242",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  mb: 1,
                }}
              >
                Date: {newsItem.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  color: "#757575",
                }}
              >
                {newsItem.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
}
