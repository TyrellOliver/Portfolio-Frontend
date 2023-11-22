import { Link } from "react-router-dom";

export default function Plant({ plant }) {
  // const myStyle = {
  //   color: "black"
  // }
  // const inStock = {
  //   color: "black"
  // }
  return (
    <Link to={`/plants/${plant.id}`}>
      <div className="plant_card">
        <div className="plant_img">
          <img src={plant.image_url} alt={`An image of ${plant.name}`} />
        </div>
        <div className="plant_description">
          <h2>{plant.name}</h2>
          <h3>{plant.price}</h3>
          <h3>{plant.in_stock ? "In Stock" : null}</h3>
          <h3>{plant.safe_for_pets ? "🐶 Safe" : "Not Safe For 🐶"}</h3>
          <h3>{plant.description}</h3>
        </div>
      </div>
    </Link>
  );
}
