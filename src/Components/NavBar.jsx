import { Link } from "react-router-dom";
import "./Styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="title">
        <Link to={"/plants"}>
          <h1>Botanic Bliss</h1>
        </Link>
      </div>
      <div className="slogan">
        <h3>Sow, Grow, Glow!</h3>
      </div>
      <div className="nav_button">
        <Link className="nav_button" to={"/plants/new"}>
          <button>Add New Plant</button>
        </Link>
      </div>
    </nav>
  );
}
