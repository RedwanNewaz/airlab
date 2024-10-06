import { Button } from "@mui/material";
import React from "react";

export default function Maps() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   });

//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/Math+Building/@30.0275961,-90.070576,15.83z/data=!3m1!5s0x8620a92ef16085a1:0x64dca853e7e04ff0!4m6!3m5!1s0x8620a92ef75b60e9:0x59d6a9b3ea75e205!8m2!3d30.0286531!4d-90.068285!16s%2Fg%2F11g8wcw_2l?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D', '_blank')
}

  return (
    <div>
      <Button onClick={openGoogleMaps}>
        <img src={require('../assets/images/maps.png')} height={400} />
      </Button>
    </div>
  );
}
