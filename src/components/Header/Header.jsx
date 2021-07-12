import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHamburger } from '@fortawesome/free-solid-svg-icons'
import {
  Header as StyledHeader, LogoLink, NavToggle, SmallLogo,
  Nav, Logo, NavList, NavItem, NavLink,
} from './HeaderStyles';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  function scrollFunction() {
    setScrolling(true);

    setTimeout(() => setScrolling(false), 500);
  }

  function handleLink() {
    setNavOpen(false);
  }

  window.onscroll = scrollFunction;

  return (
    <StyledHeader id="header" navOpen={navOpen}>
      <SmallLogo>
        <LogoLink href="#profile-card"><h2><FontAwesomeIcon icon={faCode} /> coding sumit</h2></LogoLink>
      </SmallLogo>

      <NavToggle onClick={() => setNavOpen(true)} ><FontAwesomeIcon icon={faHamburger} /></NavToggle>

      <Nav scrolling={scrolling}>
        <Logo>
          <a href="#header" id="logo"><h1><FontAwesomeIcon icon={faCode} /> coding sumit</h1></a>
        </Logo>

        <NavList id="navlinkitems">
          <NavItem><NavLink onClick={handleLink} href="#home-section" id="home">Home</NavLink></NavItem>
          <NavItem><NavLink onClick={handleLink} href="#about-section" id="about">About</NavLink></NavItem>
          <NavItem><NavLink onClick={handleLink} href="#skills-section" id="skills">Skills</NavLink></NavItem>
          <NavItem><NavLink onClick={handleLink} href="#work-section" id="work">Work</NavLink></NavItem>
          <NavItem><NavLink onClick={handleLink} href="#contact-section" id="contact">Contact</NavLink></NavItem>
        </NavList>
      </Nav>
    </StyledHeader>
  )
}
