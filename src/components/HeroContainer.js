import React from 'react';
import styled from "styled-components";
import backgroundImage from '../assets/images/uav_hero.png'; 

export default function HeroContainer({ title, subtitle }) {
  return (
    <div>
      <HeroSection>
        <div className="heroInner">
          <span>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
          </span>
        </div>
      </HeroSection>
    </div>
  );
}

const HeroSection = styled.section`
  background: linear-gradient(#0a0c2c80 3rem, transparent), url(${backgroundImage});  
  background-position: center, bottom left;
  background-size: cover;
  color: white;
  height: 60vh;
  background-attachment: fixed;

  .heroInner {
    display: flex;
    align-items: center;
    justify-content: left; /* Centers the content horizontally */
    padding: 0 2rem; /* Adjusted for responsiveness */
    text-align: left;
    height: 100%;
  }

  span {
    max-width: 50%;
    text-align: left;
  }

  h1 {
    font-weight: 900;
    font-size: clamp(2.5rem, 6vw, 4rem); /* Responsive scaling */
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem); /* Responsive scaling */
    margin-top: 0;
  }

  @media (max-width: 992px) { 
    /* Medium screens like tablets */
    height: 50vh;
    background-position: center;
    .heroInner {
      padding: 0 1rem;
    }
    span {
      max-width: 70%; /* Less width to prevent overflow on medium screens */
    }
    h1 {
      font-size: clamp(2rem, 5vw, 3.25rem);
    }
  }

  @media (max-width: 576px) { 
    /* Small screens like mobile */
    height: 45vh;
    background-position: center;
    background-size: cover;
    .heroInner {
      padding: 0 1rem;
    }
    span {
      max-width: 100%; /* Full width on small screens */
    }
    h1 {
      font-size: clamp(1.75rem, 6vw, 2.5rem); /* Smaller size for mobile */
      text-align: center;
    }
    h2 {
      font-size: clamp(1.2rem, 3.5vw, 1.5rem); /* Scale down the subtitle */
    }
  }
`;

