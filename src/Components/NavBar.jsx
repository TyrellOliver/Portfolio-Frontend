import { Link } from "react-router-dom";
import "./Styles/NavBar.css";

export default function NavBar() {
  const styles = {
    color: "white",
  };

  return (
    <nav className="navbar">
      <div className="title_slogan">
        <Link to={"/"}>
          <h1>Botanic Bliss</h1>
        </Link>

        <h3 id="slogan">Sow, Grow, Glow!</h3>
      </div>

      <div className="plants">
        <Link to={"/plants"}>
          <h2 style={styles}>Plants</h2>
        </Link>
      </div>

      <div className="pots">
        <Link to={"/accessories"}>
          <h2 style={styles}>Accessories</h2>
        </Link>
      </div>

      <div className="nav_button">
        <Link to={"/plants/new"}>
          <button>Add New Plant</button>
        </Link>
      </div>
    </nav>
  );
}
