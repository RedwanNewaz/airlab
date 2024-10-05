import { React, useEffect, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Grid2 } from "@mui/material";
import PublicationList from "../components/PublicationList";
import { publicationData, years } from "../constants/data/publicationData";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import "../constants/styles.css";
import SelectInput from "../components/SelectInput";

const ChipPaper = styled(Paper)(({ theme }) => ({
  // width: 120,
  // height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
}));

export default function Publication() {
  const [publications, setPublications] = useState({});
  const [openBibtex, setOpenBibtex] = useState(null);
  const [openAbstract, setOpenAbstract] = useState(null);

  const handleOpenBibtex = (id) => {
    setOpenAbstract(null);
    if (openBibtex === id) {
      setOpenBibtex(null);
    } else {
      setOpenBibtex(id);
    }
  };

  const handleOpenAbstract = (id) => {
    setOpenBibtex(null);
    if (openAbstract === id) {
      setOpenAbstract(null);
    } else {
      setOpenAbstract(id);
    }
  };

  const getAllPublicationsByYear = () => {
    const publicationsByYear = publicationData.reduce((acc, publication) => {
      if (!acc[publication.year]) {
        acc[publication.year] = [];
      }
      acc[publication.year].push(publication);
      return acc;
    }, {});
    return publicationsByYear;
  }

  const filterPublications = (menuItems) => {
    if (menuItems.length == 0) {
      const publicationsByYear = getAllPublicationsByYear()
      setPublications(publicationsByYear);
    } else {
      const publicationsByYear = publicationData.reduce((acc, pub) => {
        const pubYear = pub.year; 
        if (menuItems.includes(pubYear)) {
          if (!acc[pubYear]) {
            acc[pubYear] = [];
          }
          acc[pubYear].push(pub);
        }
        return acc;
      }, {});
      setPublications(publicationsByYear);
    }
  }

  useEffect(() => {
    const publicationsByYear = getAllPublicationsByYear()
    setPublications(publicationsByYear);
  }, [])

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={"Publications"} subtitle={"By Year"} />
      <Stack marginLeft={'10%'} marginTop={'2%'}>
        <Stack direction={'row'} spacing={4}>
         <SelectInput label={'Filter By Year'} menuOptions={years} saveMenuItems={filterPublications}/>
        </Stack>
      </Stack>
      <Box sx={{ px: "10%", py: "5%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5vh",
          }}
        >
          {Object.keys(publications)
            .sort((a, b) => b - a)
            .map((year) => (
              <Stack
                spacing={2}
                key={year}
                sx={{ textAlign: "left", margin: 0 }}
              >
                <h2>{year}</h2>
                {publications[year].map((pub, index) => (
                  <Stack spacing={1} key={pub.id}>
                    <h3 className="no-margin-padding">
                      {index + 1}. {pub.title}
                    </h3>
                    <p className="no-margin-padding">
                      Authors: {pub.authors.join(", ")}
                    </p>
                    <i className="no-margin-padding">{pub.journal}</i>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                      <Chip
                        label="BibTeX"
                        color="primary"
                        size="small"
                        onClick={() => handleOpenBibtex(pub.id)}
                      />
                      <Chip
                        label="Abstract"
                        color="primary"
                        size="small"
                        onClick={() => handleOpenAbstract(pub.id)}
                      />
                      <Chip
                        label="Link"
                        color="primary"
                        size="small"
                        onClick={() => {
                          window.open(
                            pub.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      />
                    </Stack>
                    {openBibtex === pub.id && (
                      <ChipPaper variant="outlined">
                        <pre>{pub.bibtex}</pre>
                      </ChipPaper>
                    )}
                    {openAbstract === pub.id && (
                      <ChipPaper variant="outlined">
                        <pre
                          style={{
                            padding: "20px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {pub.abstract}
                        </pre>
                      </ChipPaper>
                    )}
                  </Stack>
                ))}
              </Stack>
            ))}
        </div>
      </Box>
    </div>
  );
}
