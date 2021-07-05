import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Container,
} from './OnHoverStyles';

export default function OnHover() {
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function Message() {
    return (
      <div>
        <FontAwesomeIcon icon={faHome} color="white" />
        <span>Hovered</span>
      </div>
    )
  }

  return (
    <>
      <Button
        hovered={button}
        onClick={() => setShowModal(prevState => !prevState)}

        onMouseEnter={() => setButton(true)}
        onMouseLeave={() => setButton(false)}
      >
        { button ? 'Click me' : 'Hover me' }
      </Button>
      <Container
        show={showModal}
        hovered={message}

        onMouseEnter={() => setMessage(true)}
        onMouseLeave={() => setMessage(false)}
      >
        { message ? Message() : <div>Hover me</div> }
      </Container>
    </>
  )
}
