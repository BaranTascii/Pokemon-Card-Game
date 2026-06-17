import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Pack Opening</Link>

      <Link to="/collection">Collection</Link>
    </nav>
  );
}
