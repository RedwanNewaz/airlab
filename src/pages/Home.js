import { React, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link, useNavigate } from "react-router-dom";
import {
  homeData,
  homeCardData,
  homeLead,
  homeStats,
  homeThrusts,
} from "../constants/data/homeData";
import { researchData } from "../constants/data/researchData";
import { projectSites } from "../constants/data/projectData";
import { heroHome } from "../constants/data/heroImageData";
import HeroContainer from "../components/HeroContainer";
import TopNews from "../components/TopNews";
import HomeCard from "../components/HomeCard";

const SPONSORS = [
  { file: "nsf.svg", name: "National Science Foundation" },
  { file: "epa.svg", name: "U.S. Environmental Protection Agency" },
  { file: "nih.png", name: "National Institutes of Health" },
  { file: "lbrn.png", name: "Louisiana Biomedical Research Network" },
];

function SectionHeading({ title, subtitle, action }) {
  return (
    <Stack spacing={1} sx={{ textAlign: "left", width: "100%" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-end" }}
        spacing={1}
      >
        <Typography variant="h4" sx={{ color: "#2C3E50", fontWeight: "bold" }}>
          {title}
        </Typography>
        {action}
      </Stack>
      {subtitle && (
        <Typography variant="body1" sx={{ color: "#607D8B" }}>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ pt: 1 }} />
    </Stack>
  );
}

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToResearch = (id) => {
    const item = researchData.find((r) => r.id === id);
    if (!item) return navigate("/research");
    navigate(
      `/research/${item.title.toLowerCase().replace(/\s/g, "-")}-${item.id}`
    );
  };

  return (
    <Box className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroHome.title} subtitle={heroHome.subtitle} />

      <Box sx={{ px: { xs: "5%", sm: "8%" }, py: { xs: "6%", sm: "3.5%" } }}>
        <Stack spacing={{ xs: 6, sm: 8 }}>
          {/* ---------------- Lead + latest news ---------------- */}
          <Grid2 container spacing={4} alignItems="flex-start">
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Stack spacing={2.5} sx={{ textAlign: "left" }}>
                <Typography
                  variant="overline"
                  sx={{ color: "#1976d2", fontWeight: 700, letterSpacing: 1.5 }}
                >
                  {homeLead.eyebrow}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#2C3E50",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    fontSize: { xs: "1.9rem", sm: "2.4rem", md: "2.7rem" },
                  }}
                >
                  {homeLead.headline}
                </Typography>
                <Typography variant="h6" sx={{ color: "#546E7A", fontWeight: 400 }}>
                  {homeLead.body}
                </Typography>

                {homeData.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ color: "#34495E" }}
                  >
                    {item.content}
                  </Typography>
                ))}

                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/research"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Explore our research
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/join-us"
                    sx={{ textTransform: "none" }}
                  >
                    Join the lab
                  </Button>
                </Stack>
              </Stack>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <TopNews />
            </Grid2>
          </Grid2>

          {/* ---------------- Stats band ---------------- */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3498DB 100%)",
              color: "#fff",
              px: { xs: 3, sm: 5 },
              py: { xs: 3, sm: 4 },
            }}
          >
            <Grid2 container spacing={2}>
              {homeStats.map((stat) => (
                <Grid2 key={stat.label} size={{ xs: 6, md: 3 }}>
                  <Stack spacing={0.5} alignItems="center" textAlign="center">
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1.7rem", sm: "2.25rem" },
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.9, fontSize: { xs: "0.78rem", sm: "0.9rem" } }}
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid2>
              ))}
            </Grid2>
          </Paper>

          {/* ---------------- Research thrusts ---------------- */}
          <Stack spacing={3}>
            <SectionHeading
              title="What we work on"
              subtitle="One methodology -- act wisely under uncertainty with limited resources -- meeting four very different worlds."
              action={
                <Button
                  component={Link}
                  to="/research"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "none" }}
                >
                  All research areas
                </Button>
              }
            />
            <Grid2 container spacing={3}>
              {homeThrusts.map((thrust) => (
                <Grid2 key={thrust.title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    sx={{
                      height: "100%",
                      borderTop: "5px solid #1976d2",
                      boxShadow: 2,
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{ height: "100%", alignItems: "stretch" }}
                      onClick={() => goToResearch(thrust.researchId)}
                    >
                      <CardContent sx={{ textAlign: "left", height: "100%" }}>
                        <Stack spacing={1}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "#2C3E50" }}
                          >
                            {thrust.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#546E7A" }}>
                            {thrust.body}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Stack>

          {/* ---------------- Robot platforms ---------------- */}
          <Stack spacing={3}>
            <SectionHeading
              title="Our robots"
              subtitle="Drones, ground vehicles, manipulators, and autonomous boats -- built, flown, and sailed by the lab."
            />
            <Grid2 container spacing={3} justifyContent="center">
              {homeCardData &&
                homeCardData.map((item, index) => (
                  <Grid2 key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                    <HomeCard homeCardData={item} />
                  </Grid2>
                ))}
            </Grid2>
          </Stack>

          {/* ---------------- Featured project sites ---------------- */}
          <Stack spacing={3}>
            <SectionHeading
              title="Featured projects"
              subtitle="Code, videos, and results, straight from the project websites."
              action={
                <Button
                  component={Link}
                  to="/projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "none" }}
                >
                  All projects
                </Button>
              }
            />
            <Grid2 container spacing={3}>
              {projectSites.slice(0, 3).map((project) => (
                <Grid2 key={project.id} size={{ xs: 12, md: 4 }}>
                  <Card sx={{ height: "100%", boxShadow: 2 }}>
                    <CardActionArea
                      sx={{ height: "100%", alignItems: "stretch" }}
                      onClick={() =>
                        window.open(project.url, "_blank", "noopener,noreferrer")
                      }
                    >
                      <CardContent sx={{ textAlign: "left", height: "100%" }}>
                        <Stack spacing={1}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 700, color: "#1976d2" }}
                            >
                              {project.name}
                            </Typography>
                            <LaunchIcon
                              fontSize="small"
                              sx={{ color: "#90A4AE" }}
                            />
                          </Stack>
                          <Typography
                            variant="caption"
                            sx={{ fontStyle: "italic", color: "#78909C" }}
                          >
                            {project.venue}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#546E7A" }}>
                            {project.desc}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Stack>

          {/* ---------------- Sponsors ---------------- */}
          <Stack spacing={2} alignItems="center">
            <Typography
              variant="overline"
              sx={{ color: "#78909C", letterSpacing: 2, fontWeight: 700 }}
            >
              Our research is supported by
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 6 }}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              {SPONSORS.map((s) => (
                <Box
                  key={s.file}
                  component="img"
                  src={require(`../assets/logos/${s.file}`)}
                  alt={s.name}
                  title={s.name}
                  sx={{
                    height: { xs: 54, sm: 76 },
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(35%)",
                    opacity: 0.92,
                    transition: "filter 0.3s ease, opacity 0.3s ease",
                    "&:hover": { filter: "none", opacity: 1 },
                  }}
                />
              ))}
            </Stack>
            <Button
              component={Link}
              to="/funding"
              endIcon={<ArrowForwardIcon />}
              sx={{ textTransform: "none" }}
            >
              See our funded projects
            </Button>
          </Stack>

          {/* ---------------- Call to action ---------------- */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: "16px",
              backgroundColor: "rgb(60, 60, 60)",
              color: "#fff",
              px: { xs: 3, sm: 6 },
              py: { xs: 4, sm: 5 },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Stack spacing={1} sx={{ textAlign: "left" }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Interested in joining the AiR Lab?
                </Typography>
                <Typography variant="body1" sx={{ color: "#cfd8dc" }}>
                  We advise Ph.D., M.S., and undergraduate researchers, and we
                  welcome collaborators across disciplines.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/join-us"
                  sx={{ textTransform: "none" }}
                >
                  Join us
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    borderColor: "#90A4AE",
                    "&:hover": { borderColor: "#fff" },
                  }}
                >
                  Contact
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
