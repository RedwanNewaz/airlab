import React from 'react';
import styled from "styled-components";
// import videoSrc from '../assets/videos/YOLOTAG_spiral_eight_final-2024-03-18_16.12.55.mp4'; // Adjust the video path as necessary

export default function VideoHeroContainer({ title, subtitle }) {
  return (
    <VideoHeroSection>
      <VideoBackground
        autoPlay
        loop
        muted
        controls
        // playsInline
      >
        <source src={''} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <div className="heroInner">
        <span>
          <h1>Welcome to <br/> {title} </h1>
          {subtitle && <h2>{subtitle}</h2>}
        </span>
      </div>
    </VideoHeroSection>
  );
}

const VideoHeroSection = styled.section`
  position: relative;
  height: 60vh; /* Set the height for the hero section */
  overflow: hidden; /* Prevent content overflow */
  color: white;

  .heroInner {
    display: flex;
    text-align: left;
    align-items: center;
    padding-left: 5rem;
    height: 100%;
    margin: 0 auto;
    position: relative; /* Ensure the text is above the video */
    z-index: 1; /* Make sure content is above the video */
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    height: 50vh; /* Adjust height for smaller screens */
    max-height: 720px;

    .heroInner {
      padding-left: 0;
      margin: 0 10px;
      text-align: center;
      max-width: 100%;
    }
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0; /* Ensure video is behind the text */
  transform: translate(-50%, -50%);
  object-fit: cover; /* Maintain aspect ratio */
  background-attachment: fixed; /* Keep the video fixed in the background */
`;
