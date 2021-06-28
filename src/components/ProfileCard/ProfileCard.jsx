import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Profile from '../../assets/images/profile.jpg';
import {
  StyledCard,
  Box,
  ArrContainer,
  LeftContainer,
  Skills,
  Icons,
  Cancel,
} from "./CardStyles";

export default function ProfileCard() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(prevState => !prevState);
  }

  return (
    <StyledCard>
      <Box>
        <img src={Profile} alt="Profile"/>
        <div>
          <p className="user_name">Pablo Jordá</p>
          <p className="skill">Full-stack developer</p>
        </div>

        <ArrContainer className={`${active && 'active_arr'}`}  onClick={handleActive}>
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </ArrContainer>

        <LeftContainer className={`${active ? 'active' : 'off'}`}>
          <p>Skills</p>

          <Skills>
            <div>React</div>
            <div>styled-components</div>
            <div>Font Awesome</div>
          </Skills>

          <Icons>
            <a href="https://github.com/Pjorda96" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/Pjorda96" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="http://pjorda.pablojorda.es" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://pjorda.pablojorda.es/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Icons>

          <Cancel className="cancel center" onClick={handleActive} >
            <FontAwesomeIcon icon={faTimes} />
          </Cancel>
        </LeftContainer>
      </Box>
    </StyledCard>
  )
}
