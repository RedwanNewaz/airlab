import { React, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export default function MemberModal({ handleModal, memberData, openModal }) {
  const isSmallScreen = useMediaQuery("(max-width:670px)"); // Media query for small screens

  return (
    // <div>
    <Modal
      open={openModal}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style, 
          width: isSmallScreen ? "80%" : "600px", 
          maxHeight: "70%"
        }}
      >
        <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
            <img
              src={
                memberData.photo
                  ? require(`../assets/images/${memberData.photo}`)
                  : require("../assets/images/profile.png")
              }
              width={"50%"}
            />
          <Stack spacing={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {memberData.name} - {memberData.position}
            </Typography>
            <Typography id="modal-modal-description">
              {memberData.description}
            </Typography>
            <Button onClick={handleModal} variant="contained">
              Close
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>

    // </div>
  );
}
