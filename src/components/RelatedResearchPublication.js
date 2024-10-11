import {
  Grid2,
  Typography,
  Stack,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import RelatedResearchButtons from "../components/RelatedResearchButtons";
import RelatedPublications from "../components/RelatedPublications";

export default function RelatedResearchPublication({ aboutData }) {
  return (
    <Stack spacing={6}>
      {/* Related Research */}
      <Stack spacing={4}>
        {aboutData.relatedResearch && aboutData.relatedResearch.length > 0 && (
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              height: "100%",
              border: "1px solid #e0e0e0",
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                py: "0.5rem",
                fontWeight: "bold",
                color: "#2C3E50",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Related Research
            </Typography>
            {(aboutData.relatedResearch &&
              aboutData.relatedResearch.length > 0 ) && (
                <RelatedResearchButtons
                  researchIds={aboutData.relatedResearch}
                />
              )}
          </Box>
        )}
      </Stack>

      {/* Related Publications */}
      <Stack spacing={4}>
        {aboutData.relatedPublication &&
          aboutData.relatedPublication.length >
            0 && (
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  height: "fit-content",
                  border: "1px solid #e0e0e0",
                  p: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    py: "0.5rem",
                    fontWeight: "bold",
                    color: "#2C3E50",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Related Publications
                </Typography>
                {aboutData.relatedPublication &&
                  aboutData.relatedPublication.length > 0 && (
                    <RelatedPublications
                      pubIds={aboutData.relatedPublication}
                      overflow={false}
                    />
                  )}
              </Box>
            )}
      </Stack>
    </Stack>
  );
}
