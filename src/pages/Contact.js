import React from "react";
import HeroContainer from "../components/HeroContainer";
import Maps from "../components/Maps";
import { contactData } from "../constants/data/contactData";
import { Stack } from "@mui/material";

export default function Contact() {
  return (
    <div className="flex-column full-height-width" style={{gap: '10px'}}>
      <HeroContainer
        title={"Contact"}
        subtitle={"Get in touch with us to talk about Robotics"}
      />
      <Stack spacing={6} paddingBottom={'5%'}>
        <Stack spacing={2}>
          <h2>Click on the image to reach our lab</h2>
          <Maps />
        </Stack>
        <Stack spacing={4}>
        {contactData.map((contact, index) => {
          return (
            <Stack style={{textAlign: 'left'}} spacing={2} paddingLeft={'10%'}>
              <Stack direction="row" alignItems={'center'} spacing={2}>
                <h3 className="no-margin-padding">{index+1}. {contact.name}</h3>
                <p className="no-margin-padding" >{'-'}</p>
                <p className="no-margin-padding" >{contact.position}</p>
              </Stack>
              {contact.phone && <p className="no-margin-padding">{contact.phone}</p>}
              <p className="no-margin-padding">{contact.email}</p>
            </Stack>
          );
        })}
        </Stack>
      </Stack>
    </div>
  );
}
