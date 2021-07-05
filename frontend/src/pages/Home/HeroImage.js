import React from 'react';
import styled from 'styled-components'

import mobile from 'assets/mobile_hero.jpg'
import tablet from 'assets/tablet_hero.jpg'
import desktop from 'assets/desktop_hero.jpg'

const HeroImage = () => {
  return (
    <HeroImageContainer>
      <TextButtonsContainer>
        <TextButtonsContainerBackground>
          <HeroTitle>International Security Conference</HeroTitle>
          <HeroSubtitle>15 September 2021</HeroSubtitle>
          <HeroSubtitle>Artipelag, Värmdö</HeroSubtitle>
          <ButtonsContainer>
            <HomeButton>Register</HomeButton>
            <HomeButton>Sign in</HomeButton>
          </ButtonsContainer>
        </TextButtonsContainerBackground>
      </TextButtonsContainer>
      <Picture>
        <source srcSet={tablet} media="(min-width:768px) and (max-width: 949px)" />
        <source srcSet={desktop} media="(min-width: 950px)" />
        <Image src={mobile} />
      </Picture>
    </HeroImageContainer>

  );
}

export default HeroImage;

const HeroImageContainer = styled.div`
  margin: 0;
  height: 90vh;
  position: relative;
  `

const Picture = styled.picture`

`

const Image = styled.img`
  margin: 0;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  `
const TextButtonsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextButtonsContainerBackground = styled.div`
  background-color: rgba(128, 128, 128, 0.418);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  justify-content: center;
`
const HeroTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #FCFEFF;

  @media (max-width: 370px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
`

const HeroSubtitle = styled.h2`
  color: #E1E2E8;
  text-align: center;
  font-size: 25px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 100%;
`
const HomeButton = styled.a`
  border-radius: 10px;
  background-color: #e50038;
  padding: 10px;
  margin: 10px;
  width: 50%;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`