import { React, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MemberModal({ handleModal, memberData }) {
  return (
    // <div>
    <Modal
      open={true}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid size={6}>
                <img src={require('../constants/images/profile.png')} width={'100%'}/>
          </Grid>
          <Grid size={6}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {memberData.name} - {memberData.position}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {memberData.description}
              </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>

    // </div>
  );
}
