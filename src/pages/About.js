import {
  Grid2,
  Typography,
  Stack,
  Box,
  Button,
  useMediaQuery,
  Chip,
} from "@mui/material";
import React from "react";
import RelatedResearchButtons from "../components/RelatedResearchButtons";
import { publicationData } from "../constants/data/publicationData";
import { Link } from "react-router-dom";
import RelatedPublications from "../components/RelatedPublications";
import RelatedResearchPublication from "../components/RelatedResearchPublication";

export default function About({ aboutData }) {
  const isMediumScreen = useMediaQuery("(max-width:1280px)"); // Media query for small screens

  return (
    <div
      className="full-height-width flex-column-no-gap"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "inherit",
      }}
    >
      <Stack
        spacing={12}
        justifyContent={"center"}
        alignItems={"center"}
        paddingBottom={"2rem"}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            overflow: "hidden",
            borderRadius: "16px",
            marginTop: "2rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={require(`../assets/images/${aboutData.image}`)}
            alt={aboutData.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid2 container spacing={2} width={"90%"}>
            {/* Title and Primary Content */}
            <Grid2 size={isMediumScreen ? 12 : 6}>
              <Stack spacing={2} paddingBottom={"2rem"}>
                <Stack spacing={2}>
                  <Typography variant="h3" color="#2C3E50">
                    {aboutData.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#34495E" }}>
                    {aboutData.primaryContent}
                  </Typography>
                </Stack>
                {isMediumScreen && (
                  <Grid2 size={12}>
                    <RelatedResearchPublication aboutData={aboutData} />
                  </Grid2>
                )}
              </Stack>
              <Stack spacing={4} textAlign={"left"}>
                {aboutData.secondaryContent &&
                  aboutData.secondaryContent.map((element, index) => (
                    <Stack spacing={2} key={index}>
                      <Typography variant="h5" color="#2980B9">
                        {element.header && element.header}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#34495E" }}>
                        {element.content && element.content}
                      </Typography>
                    </Stack>
                  ))}
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  {aboutData.links &&
                    aboutData.links.length > 0 &&
                    aboutData.links.map((link, linkIndex) => (
                      <Chip
                        label={link.label}
                        color="secondary"
                        key={linkIndex}
                        onClick={() =>
                          window.open(
                            link.href,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        sx={{ cursor: "pointer" }}
                      />
                    ))}
                </Stack>
              </Stack>
            </Grid2>
            {/* Related Section (Related Research & Publications) */}
            {!isMediumScreen && (
              <Grid2 size={6}>
                <RelatedResearchPublication aboutData={aboutData} />
              </Grid2>
            )}
          </Grid2>
        </Box>
      </Stack>
    </div>
  );
}
