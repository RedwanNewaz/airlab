import React from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Grid2 } from "@mui/material";
import teamData from "../constants/data/teamData";
import TeamMemberCard from "../components/TeamMemberCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { heroTeam } from "../constants/data/heroImageData";


export default function Team() {
  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer
        title={heroTeam.title}
        subtitle={heroTeam.subtitle}
      />
      <Box sx={{ px: { xs: "5%", sm: "10%" }, py: { xs: "3%", sm: "5%" } }}>
        <ThemeProvider
          theme={createTheme({
            breakpoints: {
              values: {
                laptop: 1024,
                tablet: 650,
                mobile: 0,
                desktop: 1280,
              },
            },
          })}
        >
          <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 2 }}>
            {teamData.map((member) => (
              <Grid2
                key={member.id}
                size={{ mobile: 12, tablet: 6, laptop: 3 }}
              >
                <TeamMemberCard memberData={member} />
              </Grid2>
            ))}
          </Grid2>
        </ThemeProvider>
      </Box>
    </div>
  );
}
