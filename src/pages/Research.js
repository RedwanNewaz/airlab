import React, { useState, useEffect } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Grid2 } from "@mui/material";
import { researchData, tags } from "../constants/data/researchData";
import ResearchCard from "../components/ResearchCard";
import Stack from "@mui/material/Stack";
import SelectInput from "../components/SelectInput";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { heroResearch } from "../constants/data/heroImageData";
import CustomAutoComplete from "../components/CustomAutoComplete";


export default function Research() {
  const [researchWorks, setResearchWorks] = useState(researchData);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component mounts
  }, []);

  const filterResearchByTags = (menuItems) => {
    if (menuItems.length === 0) {
      setResearchWorks(researchData);
      return;
    }
    const filteredResearchWorks = researchData.filter((research) =>
      research.tags.some((tag) => menuItems.includes(tag))
    );
    setResearchWorks(filteredResearchWorks);
  };

  const filterResearchByTitle = (event, title) => {
    if (!title) {
      setResearchWorks(researchData);
      return;
    }
    const filteredResearchWorks = researchData.filter(
      (research) => research.title === title
    );
    setResearchWorks(filteredResearchWorks);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <HeroContainer title={heroResearch.title} subtitle={heroResearch.subtitle} />
      <Stack
        paddingLeft={{ xs: "2%", sm: "2%" }}
        paddingTop={"2%"}
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <SelectInput
          label={"Research Tags"}
          menuOptions={tags}
          saveMenuItems={filterResearchByTags}
        />
        <CustomAutoComplete data={researchData} filterData={filterResearchByTitle} textFieldLabel={"Search Research By Title"} />
      </Stack>
      <Box sx={{ px: { xs: "5%", sm: "2%" }, py: { xs: "3%", sm: "5%" } }}>
      <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 720,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 2 }}>
        {researchWorks.map((research) => (
          <Grid2 key={research.id} size={{ mobile: 12, tablet: 4, laptop: 3 }}>
            <ResearchCard researchData={research} />
          </Grid2>
        ))}
      </Grid2>

    </ThemeProvider>
        {/* <Grid2 container spacing={2}>
          {researchWorks.map((research) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={research.id}>
              <ResearchCard researchData={research} />
            </Grid2>
          ))}
        </Grid2> */}
      </Box>
    </div>
  );
}
