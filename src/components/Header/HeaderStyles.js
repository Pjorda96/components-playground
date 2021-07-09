import styled from "styled-components";

const hoverFocuesBefore = `
  transform-origin: left top;
  transform: scale(1, 1);
`;
const maxBreakpoint = '800px';

export const Header = styled.header`
  a {
    text-decoration: none;
    color: #111;
  }
`;

export const SmallLogo = styled.div`
  display: none;
`;

export const LogoLink = styled.a`

`;

export const NavToggle = styled.button`
  display: none;
`;

export const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  display: block;
  justify-content: flex-start;
  z-index: 10;
  font-weight: 300;
  transition: .2s ease-in-out;
  position: fixed;
  background-color: ${p => p.scrolling ? '#fff' : ''};

  @media(max-width: ${maxBreakpoint}) {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transform: translateY(100%);
    transition: transform 250ms cubic-bezier(.5, 0, .5, 1);
    height: 100vh;
  }
`;

export const Logo = styled.div`
  padding: 3vh 5vw;
  text-align: center;
  display: flex;
  align-items: center;
  color: rgb(22, 8, 8);
  text-transform: uppercase;
  width: 25rem;
  font-weight: 800;

  h1 {
    font-size: 20px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-left: 55vh;
  margin-top: -49px;
  padding: 0vh 4vw;

  @media(max-width: ${maxBreakpoint}) {
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin: 0;
    padding: 135px;
    background-color: #111;
    width: 100%;
  }
`;

export const NavItem = styled.div`

`;

export const NavLink = styled.a`
  text-decoration: none;
  margin: 0 50px 0 12px;
  position: relative;
  padding: 16px 0;
  letter-spacing: 1px;
  line-height: 17px;
  font-weight: 700;
  transition: color .1s, background-color .1s, padding .2s ease-in;
  color: #111;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #000;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color .1s, transform .2s ease-out;
  }

  &:active {
    &:before {
      background-color: #000;
    }
  }

  &:hover {
    &:before {
      ${hoverFocuesBefore};
    }
  }

  &:focus {
    &:before {
      ${hoverFocuesBefore};
    }
  }
`;
