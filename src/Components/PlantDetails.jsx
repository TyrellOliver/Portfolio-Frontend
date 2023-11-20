import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function PlantDetails() {
  const [plant, setPlant] = useState([]);
  let navigate = useNavigate();
  let { index } = useParams();

  // fetching / getting a single plant index
  const fetchData = async () => {
    try {
      fetch(`${API}/plants/${index}`)
        .then((res) => res.json())
        .then((res) => {
          setPlant(res);
        });
    } catch (error) {
      return error;
    }
  };

  // Displaying one plant
  useEffect(() => {
    fetchData();
  }, [index]);

  const handleDelete = () => {
    fetch(`${API}/plants/${index}`, {
      method: "Delete",
    }).then(() => navigate("/plants"));
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this plant?")) {
      handleDelete();
    }
  };

  return (
    <div className="plantDetails">
      <h2>Plant Details</h2>
      <div className="plant-card">
        <div className="plant-img">
          <img src={plant.image_url} alt={``} />
        </div>
        <div className="plant-description">
          <h2>{plant.name}</h2>
          <h3>{plant.price}</h3>
          <h3>{plant.in_stock ? "In Stock" : null}</h3>
          <h3>{plant.safe_for_pets ? "🐶 Safe" : "Not Safe For 🐶"}</h3>
          <h3>{plant.description}</h3>
        </div>
      </div>
      <div className="buttons">
        <Link to={`/plants`}>
          <button>Back</button>
        </Link>
        <Link to={`/plants/${index}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={confirmDelete}>Delete</button>
      </div>
    </div>
  );
}
