import React, { useEffect, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Grid2 } from "@mui/material";
import { researchData, tags } from "../constants/data/researchData";
import ResearchCard from "../components/ResearchCard";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import SelectInput from "../components/SelectInput";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Research() {
  const [researchWorks, setResearchWorks] = useState(researchData);

  const filterResearchByTags = (menuItems) => {
    if (menuItems.length == 0) {
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
    const filteredResearchWorks = researchData.filter(research => research.title === title);
    setResearchWorks(filteredResearchWorks);

  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <HeroContainer
        title={"Research"}
        subtitle={"We work on making autonmous systems"}
      />
      <Stack
        paddingLeft={"10%"}
        paddingTop={"2%"}
        direction={"row"}
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
        <Autocomplete
          onChange={filterResearchByTitle}
          disablePortal
          options={researchData.map((research) => research.title)}
          sx={{ width: 300, margin: 0 }}
          renderInput={(params) => (
            <TextField
              sx={{ margin: 0 }}
              {...params}
              label="Search Research By Title"
            />
          )}
        />
      </Stack>
      <Box sx={{ px: "10%", py: "5%" }}>
        <Grid2 container spacing={2}>
          {researchWorks.map((research) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={research.id}>
              <ResearchCard researchData={research} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
}
