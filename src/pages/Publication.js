import { React, useEffect, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import {
  Box,
  Stack,
  Chip,
  Paper,
  Typography,
  Grid2,
  // useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  publicationData,
  years,
  categories,
} from "../constants/data/publicationData";
import SelectInput from "../components/SelectInput";
import { heroPublication } from "../constants/data/heroImageData";
import { useLocation } from "react-router-dom";


const CATEGORY_COLORS = {
  "Journal Article": "#1565c0",
  "Conference Paper": "#2e7d32",
  "Under Review": "#ef6c00",
};

const ChipPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f7f7f7",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

export default function Publication() {
  const [publications, setPublications] = useState({});
  const [openBibtex, setOpenBibtex] = useState(null);
  const [openAbstract, setOpenAbstract] = useState(null);
  // const isSmallScreen = useMediaQuery("(max-width:600px)"); // Media query for small screens

  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Get element by id
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Using setTimeout to ensure that the DOM is fully rendered before scrolling
    const timeoutId = setTimeout(scrollToHash, 0);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [location]);

  const handleOpenBibtex = (id) => {
    setOpenAbstract(null);
    setOpenBibtex(openBibtex === id ? null : id);
  };

  const handleOpenAbstract = (id) => {
    setOpenBibtex(null);
    setOpenAbstract(openAbstract === id ? null : id);
  };

  const [yearFilter, setYearFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  useEffect(() => {
    const grouped = publicationData
      .filter(
        (pub) =>
          (yearFilter.length === 0 || yearFilter.includes(pub.year)) &&
          (categoryFilter.length === 0 || categoryFilter.includes(pub.category))
      )
      .reduce((acc, pub) => {
        if (!acc[pub.year]) {
          acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
      }, {});
    setPublications(grouped);
  }, [yearFilter, categoryFilter]);

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer
        title={heroPublication.title}
        subtitle={heroPublication.subtitle}
      />

      <Stack
        marginX={"auto"}
        marginTop={{ xs: "4%", sm: "2%" }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="80%"
        flexWrap="wrap"
        useFlexGap
      >
        <SelectInput
          label={"Filter By Year"}
          menuOptions={years}
          saveMenuItems={setYearFilter}
        />
        <SelectInput
          label={"Filter By Type"}
          menuOptions={categories}
          saveMenuItems={setCategoryFilter}
        />
      </Stack>
      <Box sx={{ px: { xs: "3%", sm: "10%" }, py: "5%", maxWidth: "90vw" }}>
        <Grid2 maxWidth={"100%"} container spacing={3} direction="column">
          {Object.keys(publications)
            .sort((a, b) => b - a)
            .map((year) => (
              <Grid2 item xs={12} key={year}>
                <Stack
                  spacing={2}
                  sx={{
                    textAlign: "left",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    padding: { xs: "10px", sm: "20px" },
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                  >
                    {year}
                  </Typography>

                  {publications[year].map((pub, index) => (
                    <Stack
                      spacing={2}
                      key={pub.id}
                      id={`publication-item-${pub.id}`} // Add id for the item
                      sx={{
                        scrollMarginTop: "72px",
                        padding: { xs: "10px", sm: "15px" },
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                        flexWrap="wrap"
                        useFlexGap
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                            flexGrow: 1,
                          }}
                        >
                          {index + 1}. {pub.title}
                        </Typography>
                        {pub.category && (
                          <Chip
                            label={pub.category}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontWeight: 600,
                              borderColor: CATEGORY_COLORS[pub.category] || "#9e9e9e",
                              color: CATEGORY_COLORS[pub.category] || "#9e9e9e",
                            }}
                          />
                        )}
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#616161",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        }}
                      >
                        Authors: {pub.authors.join(", ")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        }}
                      >
                        {pub.journal}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems={"center"}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        <Chip
                          label="BibTeX"
                          color="primary"
                          size="small"
                          onClick={() => handleOpenBibtex(pub.id)}
                          sx={{ cursor: "pointer" }}
                        />
                        <Chip
                          label="Abstract"
                          color="primary"
                          size="small"
                          onClick={() => handleOpenAbstract(pub.id)}
                          sx={{ cursor: "pointer" }}
                        />
                        {pub.link && pub.link !== "No link available" && (
                          <Chip
                            label="Link"
                            color="secondary"
                            size="small"
                            onClick={() => {
                              window.open(
                                pub.link,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            sx={{ cursor: "pointer" }}
                          />
                        )}

                        {pub.pdf && (
                          <Chip
                            label="PDF"
                            color="secondary"
                            size="small"
                            onClick={() => {
                              window.open(
                                pub.pdf,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            sx={{ cursor: "pointer" }}
                          />
                        )}

                        {pub.projectUrl && (
                          <Chip
                            label="Project Site"
                            color="success"
                            size="small"
                            onClick={() => {
                              window.open(
                                pub.projectUrl,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            sx={{ cursor: "pointer" }}
                          />
                        )}
                      </Stack>

                      {openBibtex === pub.id && (
                        <ChipPaper variant="outlined">
                          <pre
                            style={{
                              whiteSpace: "pre-wrap",
                              wordWrap: "break-word",
                            }}
                          >
                            {pub.bibtex}
                          </pre>
                        </ChipPaper>
                      )}
                      {openAbstract === pub.id && (
                        <ChipPaper variant="outlined">
                          <Typography
                            variant="body2"
                            sx={{
                              whiteSpace: "pre-wrap",
                              wordWrap: "break-word",
                            }}
                          >
                            {pub.abstract}
                          </Typography>
                        </ChipPaper>
                      )}
                    </Stack>
                  ))}
                </Stack>
              </Grid2>
            ))}
        </Grid2>
      </Box>
    </div>
  );
}
