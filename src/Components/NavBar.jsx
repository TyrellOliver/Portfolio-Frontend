import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <Link to={"/plants"}>Botanic Bliss</Link>
      </h1>
      <h3>Sow, Grow, Glow!</h3>
      <button>
        <Link to={"/plants/new"}>Add New Plant</Link>
      </button>
    </nav>
  );
}
