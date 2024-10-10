import { React, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MemberModal from "./MemberModal";

export default function TeamMemberCard({ memberData }) {
  const [openModal, setOpenModal] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Media query for small screens

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: isSmallScreen ? "100%" : 300,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: 3,
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          onClick={handleModal}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "300px", // Fixed height
              objectFit: "contain", // Ensures no cropping
              backgroundColor: "#f5f5f5", // Optional background color
            }}
            image={
              memberData.photo
                ? require(`../assets/images/${memberData.photo}`)
                : require("../assets/images/profile.png")
            }
            alt="Profile"
          />
          <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {memberData.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "1rem" }}
            >
              {memberData.position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {openModal && (
        <MemberModal handleModal={handleModal} memberData={memberData} openModal={openModal}/>
      )}
    </div>
  );
}
