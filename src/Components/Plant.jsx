import { Link } from "react-router-dom";

export default function Plant({ plant, isHoverable }) {
  return (
    <Link to={`/plants/${plant.id}`}>
      <div className={isHoverable ? "plant_card_hover" : "plant_card"}>
        <div className={isHoverable ? "plantImg" :"plant_img"}>
          <img src={plant.image_url} alt={`An image of ${plant.name}`} />
        </div>
        <div className="plant_description">
          <h2>{plant.name}</h2>
          <h3>{plant.price}</h3>
          <h3>{plant.in_stock ? "In Stock" : null}</h3>
          <h3>{plant.safe_for_pets ? "Pet Safe" : "Not Safe For Pets"}</h3>
          <h3>{plant.description}</h3>
        </div>
      </div>
    </Link>
  );
}
