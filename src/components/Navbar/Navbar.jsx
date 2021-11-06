import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/other">Other</Link>
        </li>
      </ul>
    </nav>
  )
}
