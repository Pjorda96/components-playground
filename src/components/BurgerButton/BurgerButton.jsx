import { useState } from "react";
import { Button, Burger } from "./BurgerButtonStyles";

export default function BurgerButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Button onClick={() => setMenuOpen(prevState => !prevState)}>
      <Burger open={menuOpen} />
    </Button>
  )
}
