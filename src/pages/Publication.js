import { React, useEffect, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Stack, Chip, Paper, Typography, Grid2, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { publicationData, years } from "../constants/data/publicationData";
import SelectInput from "../components/SelectInput";
import { heroPublication } from "../constants/data/heroImageData";

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
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Media query for small screens


  const handleOpenBibtex = (id) => {
    setOpenAbstract(null);
    setOpenBibtex(openBibtex === id ? null : id);
  };

  const handleOpenAbstract = (id) => {
    setOpenBibtex(null);
    setOpenAbstract(openAbstract === id ? null : id);
  };

  const getAllPublicationsByYear = () => {
    return publicationData.reduce((acc, publication) => {
      if (!acc[publication.year]) {
        acc[publication.year] = [];
      }
      acc[publication.year].push(publication);
      return acc;
    }, {});
  };

  const filterPublications = (menuItems) => {
    if (menuItems.length === 0) {
      setPublications(getAllPublicationsByYear());
    } else {
      const filteredPubs = publicationData.reduce((acc, pub) => {
        const pubYear = pub.year;
        if (menuItems.includes(pubYear)) {
          if (!acc[pubYear]) {
            acc[pubYear] = [];
          }
          acc[pubYear].push(pub);
        }
        return acc;
      }, {});
      setPublications(filteredPubs);
    }
  };

  useEffect(() => {
    setPublications(getAllPublicationsByYear());
  }, []);

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroPublication.title} subtitle={heroPublication.subtitle} />

      <Stack 
        marginX={"auto"} 
        marginTop={{ xs: "4%", sm: "2%" }} 
        direction={"row"} 
        justifyContent="center" 
        alignItems="center" 
        spacing={4} 
        width="80%"
      >
        <SelectInput
          label={"Filter By Year"}
          menuOptions={years}
          sx={{ width: { xs: 200, sm: 300 }, margin: 0 }}
          saveMenuItems={filterPublications}
        />
      </Stack>
      <Box sx={{ px: { xs: "3%", sm: "10%" }, py: '5%', maxWidth: '90vw'}}>
        <Grid2 maxWidth={'100%'} container spacing={3} direction="column" >
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
                      sx={{
                        padding: { xs: "10px", sm: "15px" },
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.25rem" } }}
                      >
                        {index + 1}. {pub.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#616161", fontSize: { xs: "0.85rem", sm: "1rem" } }}
                      >
                        Authors: {pub.authors.join(", ")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontStyle: "italic", fontSize: { xs: "0.85rem", sm: "1rem" } }}
                      >
                        {pub.journal}
                      </Typography>

                      <Stack direction='row' spacing={2} alignItems={"center"}>
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
                        <Chip
                          label="Link"
                          color="secondary"
                          size="small"
                          onClick={() => {
                            window.open(pub.link, "_blank", "noopener,noreferrer");
                          }}
                          sx={{ cursor: "pointer" }}
                        />
                      </Stack>

                      {openBibtex === pub.id && (
                        <ChipPaper variant="outlined">
                          <pre style={{whiteSpace: "pre-wrap", wordWrap: "break-word"}}>{pub.bibtex}</pre>
                        </ChipPaper>
                      )}
                      {openAbstract === pub.id && (
                        <ChipPaper variant="outlined">
                          <Typography
                            variant="body2"
                            sx={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
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
