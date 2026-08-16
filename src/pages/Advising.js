import { React, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HeroContainer from "../components/HeroContainer";
import {
  advisingIntro,
  advisingSections,
  howToApply,
} from "../constants/data/advisingData";
import { heroAdvising } from "../constants/data/heroImageData";

export default function Advising() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroAdvising.title} subtitle={heroAdvising.subtitle} />

      <Box sx={{ px: { xs: "5%", sm: "10%" }, py: { xs: "6%", sm: "4%" } }}>
        <Stack spacing={5} sx={{ textAlign: "left" }}>
          {/* Mission and approach */}
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
              Research Focus and Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "#34495E" }}>
              {advisingIntro.mission}
            </Typography>
            <Divider sx={{ pt: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", pt: 1 }}>
              Research Approach
            </Typography>
            <Typography variant="body1" sx={{ color: "#34495E" }}>
              {advisingIntro.approach}
            </Typography>
          </Stack>

          {/* Advising philosophy */}
          <Grid2 container spacing={3}>
            {advisingSections.map((section) => (
              <Grid2 key={section.id} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: "100%", boxShadow: 3, borderLeft: "6px solid #1976d2" }}>
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#1976d2" }}
                      >
                        {section.title}
                      </Typography>
                      {section.body.map((paragraph, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          sx={{ color: "#34495E" }}
                        >
                          {paragraph}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>

          {/* How to apply */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "12px",
              backgroundColor: "#ECF3F9",
            }}
          >
            <Stack spacing={2} alignItems="flex-start">
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
                {howToApply.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#34495E" }}>
                {howToApply.body}
              </Typography>
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                href={`mailto:${howToApply.email}`}
              >
                {howToApply.email}
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}
