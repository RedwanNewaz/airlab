import { Button } from "@mui/material";
import React from "react";

export default function Maps() {
  // Function to open Google Maps when the button is clicked
  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/place/Math+Building/@30.0275961,-90.070576,15.83z/data=!3m1!5s0x8620a92ef16085a1:0x64dca853e7e04ff0!4m6!3m5!1s0x8620a92ef75b60e9:0x59d6a9b3ea75e205!8m2!3d30.0286531!4d-90.068285!16s%2Fg%2F11g8wcw_2l?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    );
  };

  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden", position: "relative" }}>
      <Button
        onClick={openGoogleMaps}
        style={{
          padding: 0, // Remove padding to ensure the image fills the button
          height: "100%", // Button takes the full height of the container
          width: "100%", // Button takes the full width of the container
          overflow: "hidden", // Ensure no overflow from button
        }}
      >
        <img
          src={require('../assets/images/maps.png')}
          alt="Map"
          style={{
            width: "100%", // Image fills the width of the button
            height: "100%", // Maintain a fixed height for the image
            objectFit: "cover", // Ensure the image covers the button area without stretching
            maxWidth: "100%", // Prevent the image from exceeding the width of the container
            display: "block", // Prevents bottom whitespace for inline images
          }}
        />
      </Button>
    </div>
  );
}
