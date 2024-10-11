import {React, useEffect} from "react";
import { Typography, Box, Stack, Grid2, useMediaQuery } from "@mui/material";
import { homeData, homeCardData } from "../constants/data/homeData";
import { heroHome } from "../constants/data/heroImageData";
import HeroContainer from "../components/HeroContainer";
import { newsData } from "../constants/data/newsData";
import TopNews from "../components/TopNews";
import HomeCard from "../components/HomeCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Home() {
  const topNews = newsData.slice(0, 5);
  const isLaptop = useMediaQuery("(max-width:1189px)"); // For medium screens (e.g., tablets)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component mounts
  }, []);

  return (
    <Box className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroHome.title} subtitle={heroHome.subtitle} />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          gap: { xs: "20px", md: "10px" },
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: { xs: "100%", md: "70%" },
            py: "2rem",
            flexGrow: 1, 
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Stack spacing={2} rowGap={12} direction={{xs: "column", md: "row"}} width={"90%"}>
              <Stack direction={"column"} spacing={2} sx={{ order: { xs: 2, md: 1 } }} justifyContent={'center'}>
                {homeData &&
                  homeData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "1.5rem",
                        borderRadius: "8px",
                        bgcolor: "white",
                        boxShadow: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        order: { xs: 1, md: 2 }, // TopNews comes first on mobile (order 1) and second on larger screens (order 2)
                      }}
                    >
                      <Typography sx={{ marginTop: "0.5rem" }}>
                        {item.content}
                      </Typography>
                    </Box>
                  ))}
              </Stack>
              <Box
                sx={{
                  width: { md: "60%", sm: '100%' },
                  mt: { xs: "2rem", md: "0" },
                  order: { xs: 1, md: 2 }, // TopNews comes first on mobile (order 1) and second on larger screens (order 2)
                }}
              >
                <TopNews />
              </Box>
            </Stack>
          </Box>

          <ThemeProvider
            theme={createTheme({
              breakpoints: {
                values: {
                  laptop: 1024,
                  tablet: 720,
                  mobile: 0,
                  desktop: 1321,
                },
              },
            })}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid2
                container
                columnSpacing={4}
                rowSpacing={2}
                width={{ desktop: "90%", laptop: "100%" }}
                // justifyContent={isLaptop ? 'center' : 'flex-start'}
                justifyContent={'center'}
                alignItems={"center"}
                marginX={'auto'}
              >
                {homeCardData &&
                  homeCardData.map((item, index) => (
                    <Grid2
                      key={index}
                      xs={12}
                      sm={6}
                      md={6}
                      sx={{ padding: 0, margin: 0 }}
                    >
                      <HomeCard homeCardData={item} />
                    </Grid2>
                  ))}
              </Grid2>
            </Box>
          </ThemeProvider>
        </Stack>
      </Box>
    </Box>
  );
}
