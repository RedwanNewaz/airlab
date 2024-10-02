import React from 'react';
import styled from "styled-components";
import backgroundImage from '../constants/images/uav_hero.png'; 

export default function HeroContainer({title, subtitle}) {
  return (
    <div>
      <HeroSection className="light hero">
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
  background:  linear-gradient(#0a0c2c80 3rem, transparent), url(${backgroundImage});  
  background-position: center, bottom left;
  height: fit-content;
  background-size: cover;
  color: #fafafc;
  height: 60vh;
  background-attachment: fixed;

  .heroInner {
    display: flex;
    text-align: left;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
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
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(${backgroundImage})
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;