import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Profile from '../../assets/images/profile.jpg';
import { StyledCard } from "./CardStyles";

export default function ProfileCard() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(prevState => !prevState);
  }

  return (
    <StyledCard>
      <div className="box center">
        <img src={Profile} alt="Profile"/>
        <div>
          <p className="user_name">Pablo Jordá</p>
          <p className="skill">Full-stack developer</p>
        </div>

        <div className={`arr_container center ${active && 'active_arr'}`}  onClick={handleActive}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        <div className={`left_container ${active ? 'active' : 'off'}`}>
          <p>Skills</p>

          <div className="skills">
            <div>React</div>
            <div>styled-components</div>
            <div>Font Awesome</div>
          </div>

          <div className="icons">
            <a href="https://github.com/Pjorda96" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://github.com/Pjorda96" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="http://pjorda.pablojorda.es" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="http://pjorda.pablojorda.es/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>

          <div className="cancel center" onClick={handleActive} >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </StyledCard>
  )
}
