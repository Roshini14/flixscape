import React from "react";
import {
  HeroContainer,
  HeroButton,
  HeroTitle,
  HeroDescription,
} from "./Hero.styles";

function Hero({ movie }) {
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
