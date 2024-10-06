import React from "react";
import HeroContainer from "../components/HeroContainer";
import Maps from "../components/Maps";
import { contactData } from "../constants/data/contactData";
import { Stack, Box, Typography, Paper, Grid2, Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { heroContact } from "../constants/data/heroImageData";

export default function Contact() {
  const isSmallScreen = useMediaQuery("(max-width:400px)"); // Media query for small screens

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer
        title={heroContact.title}
        subtitle={heroContact.subtitle}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: "90%",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 4 },
        }}
      >

        <Stack spacing={2} alignItems="center">
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Click on the map to reach our lab
          </Typography>
          <Maps />
        </Stack>


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
            {contactData.map((contact) => (
              <Grid2
                key={contact.id}
                size={{ mobile: 12, tablet: 6, laptop: 6 }}
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: "10px",
                  bgcolor: "#fff",
                }}
              >
                <Stack spacing={2} sx={{ textAlign: "left" }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {contact.logo && (
                      <Avatar
                        alt={contact.name}
                        src={contact.logo}
                        sx={{ width: 56, height: 56 }}
                      />
                    )}
                    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 1 : 2} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#1e88e5",
                          fontSize: { xs: "1rem", sm: "1.2rem" },
                        }}
                      >
                        {contact.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#757575",
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                        }}
                      >
                        {contact.position}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    {contact.phone && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#424242",
                          fontSize: { xs: "0.75rem", sm: "0.9rem" },
                        }}
                      >
                        {contact.phone}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#424242",
                        fontSize: { xs: "0.75rem", sm: "0.9rem" },
                      }}
                    >
                      {contact.email}
                    </Typography>
                  </Stack>
                </Stack>{" "}
              </Grid2>
            ))}
          </Grid2>
        </ThemeProvider>
      </Stack>
    </div>
  );
}
