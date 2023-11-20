import { Link } from "react-router-dom";
import "./Styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to={"/plants"}>
        <h1>Botanic Bliss</h1>
      </Link>
      <h3>Sow, Grow, Glow!</h3>
      <Link to={"/plants/new"}>
        <button>Add New Plant</button>
      </Link>
    </nav>
  );
}
