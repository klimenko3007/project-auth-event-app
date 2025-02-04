import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Animated } from 'react-animated-css';

import logo from 'assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styleHamburger = {
    fontSize: "60px",
    display: menuOpen ? "none" : "block",
  }

  const styleClose = {
    fontSize: "60px",
    display: !menuOpen ? "none" : "block",
  }

  const style = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    top: "100px",
    right: 0,
    padding: "10px",
    backgroundColor: "#798298",
    margin: 0,
    zIndex: 5,
    display: !menuOpen ? "none" : "block",
  }

  const onHamburgerClick = () => {
    setMenuOpen(!menuOpen)
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="IPRI" />
      </LogoContainer>
      <Nav>
        <HamburgerButton onClick={onHamburgerClick}>
          <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={menuOpen} animateOnMount={false}>
            <CloseIcon style={styleClose} />
          </Animated>
          <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={!menuOpen} animateOnMount={false}>
            <MenuIcon style={styleHamburger} open={menuOpen} />
          </Animated>
        </HamburgerButton>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={menuOpen}
          animateOnMount={false}
          style={style}
        >
          <DropMenuItem>About</DropMenuItem>
          <DropMenuItem> Programme </DropMenuItem>
          <DropMenuItem> Contact </DropMenuItem>
          <DropMenuItem> Sponsor </DropMenuItem>
        </Animated>
        <NavList>
          <NavListItem>About</NavListItem>
          <NavListItem>Programme</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem>Sponsor</NavListItem>

        </NavList>
      </Nav>
    </HeaderContainer >
  );
};

export default Header;

const HeaderContainer = styled.header`
  margin: 0;
  padding: 10px;
  background-color: #455F7A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;
`
const Nav = styled.nav`
  margin: 0;
`
const DropMenuItem = styled.p`
  margin: 0;
  padding: 5px;
  list-style: none;
  color: #fff;
  width: 100%;
  font-weight: bold;

    &:nth-child(2n) {
      background-color: #757E95;
    }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  @media(max-width: 649px) {
    display: none
  }
`
const NavListItem = styled.li`
  margin: 0;
  padding: 5px;
  list-style: none;
`

const LogoContainer = styled.div`
  margin: 0;
`
const Logo = styled.img`
  width: 70px;
  height: 70px;
`
const HamburgerButton = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  position: relative;
  background-color: #455F7A;
  color: #fff;

  @media(min-width: 650px) {
    display: none
  }
`
