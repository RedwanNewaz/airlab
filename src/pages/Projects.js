import { React, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import HeroContainer from "../components/HeroContainer";
import { projectSites } from "../constants/data/projectData";
import { heroProjects } from "../constants/data/heroImageData";

function SectionHeading({ title, subtitle }) {
  return (
    <Stack spacing={1} sx={{ textAlign: "left", width: "100%" }}>
      <Typography variant="h4" sx={{ color: "#2C3E50", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#607D8B" }}>
        {subtitle}
      </Typography>
      <Divider sx={{ pt: 1 }} />
    </Stack>
  );
}

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroProjects.title} subtitle={heroProjects.subtitle} />

      <Box sx={{ px: { xs: "5%", sm: "8%" }, py: { xs: "6%", sm: "4%" } }}>
        <Stack spacing={6}>
          {/* ---------------- Project websites ---------------- */}
          <Stack spacing={3}>
            <SectionHeading
              title="Project Websites"
              subtitle="Code, videos, and results for individual research projects."
            />

            <Grid2 container spacing={3}>
              {projectSites.map((project) => (
                <Grid2 key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardActionArea
                      sx={{ height: "100%", alignItems: "stretch" }}
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <CardContent sx={{ textAlign: "left", height: "100%" }}>
                        <Stack spacing={1.5} sx={{ height: "100%" }}>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#1976d2" }}
                            >
                              {project.name}
                            </Typography>
                            <LaunchIcon fontSize="small" sx={{ color: "#90A4AE" }} />
                          </Stack>

                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 600, color: "#2C3E50" }}
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            variant="caption"
                            sx={{ fontStyle: "italic", color: "#78909C" }}
                          >
                            {project.venue}
                          </Typography>

                          <Typography variant="body2" sx={{ color: "#34495E" }}>
                            {project.desc}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            useFlexGap
                            sx={{ pt: 1 }}
                          >
                            {project.tags.map((tag, index) => (
                              <Chip key={index} label={tag} size="small" />
                            ))}
                          </Stack>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
