import { React, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { Box, Grid2 } from "@mui/material";
import PublicationList from "../components/PublicationList";
import { publicationData } from "../constants/data/publicationData";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import '../constants/styles.css';

export default function Publication() {
  const [openBibtex, setOpenBibtex] = useState(null);
  const [openAbstract, setOpenAbstract] = useState(null);


  const handleOpenBibtex = (id) => {
    setOpenAbstract(null);
    if (openBibtex === id) {
      setOpenBibtex(null);
    } else {
      setOpenBibtex(id);
    }
  }

  const handleOpenAbstract = (id) => {
    setOpenBibtex(null);
    if (openAbstract === id) {
      setOpenAbstract(null);
    } else {
      setOpenAbstract(id);
    }  
  }

  const publicationsByYear = publicationData.reduce((acc, publication) => {
    if (!acc[publication.year]) {
      acc[publication.year] = [];
    }
    acc[publication.year].push(publication);
    return acc;
  }, {});

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={'Publications'} subtitle={'By Year'}/>
      <Box sx={{ px: "10%", py: "5%" }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5vh'}}>
          {Object.keys(publicationsByYear).sort((a,b) => b-a).map((year) => (
            <Stack spacing={2} key={year} sx={{textAlign: 'left', margin: 0}}>
              <h2>{year}</h2>
              {publicationsByYear[year].map((pub, index) => (
                <Stack spacing={1} key={pub.id}>
                  <h3 className="no-margin-padding">{index+1}. {pub.title}</h3>
                  <p className="no-margin-padding">Authors: {pub.authors.join(", ")}</p>
                  <i className="no-margin-padding">{pub.journal}</i>

                  <Stack direction="row" spacing={2}>
                      <button onClick={() => handleOpenBibtex(pub.id)}>Show BibTeX</button>
                      <button onClick={() => handleOpenAbstract(pub.id)}>Show Abstract</button>
                    <p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {pub.link}
                      </a>
                    </p>
                  </Stack>
                  {(openBibtex === pub.id) && <pre style={{backgroundColor: 'red'}}>{pub.bibtex}</pre>}
                  {(openAbstract === pub.id) && <pre style={{padding: '20px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', backgroundColor: 'red'}}>{pub.abstract}</pre>}
                </Stack>
              ))}
            </Stack>
          ))}
        </div>
      </Box>
    </div>
  );
}
