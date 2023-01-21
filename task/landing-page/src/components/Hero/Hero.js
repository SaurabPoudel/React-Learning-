import React from 'react';
import { HeroContainer, HeroVideo, HeroText } from './Hero.styled';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroVideo src="./assets/HeroVideo.mp4" autoPlay loop muted/>
      <HeroText>Welcome To My Website</HeroText>
    </HeroContainer>
  );
}

export default Hero;