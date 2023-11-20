import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function PlantEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [editPlant, setEditPlant] = useState({
    name: "",
    price: "",
    in_stock: true,
    description: "",
    moisture_needs: "",
    safe_for_pets: false,
    image_url: "",
  });

  const updatePlant = () => {
    fetch(`${API}/plants/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPlant),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate(`/plants/${index}`);
      });
  };

  useEffect(() => {
    fetch(`${API}/plants/${index}`)
      .then((res) => res.json())
      .then((res) => setEditPlant(res));
  }, []);

  const handleTextChange = (event) => {
    setEditPlant({ ...editPlant, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setEditPlant({ ...editPlant, safe_for_pets: !editPlant.safe_for_pets });
  };

  const handleRadioChange = (event) => {
    setEditPlant({ ...editPlant, moisture_needs: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlant();
  };

  return (
    <div className="plantEditForm">
      <h2>Plant Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="FormField">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={editPlant.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Plant"
            required
          />
        </div>
        <br />

        <div className="FormField">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            value={editPlant.price}
            type="number"
            onChange={handleTextChange}
            placeholder="0"
            required
          />
        </div>
        <br />

        <div className="FormField">
          <label htmlFor="description">description:</label>
          <input
            id="description"
            value={editPlant.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Description"
            required
          />
        </div>
        <br />

        <div className="FormField">
          <label htmlFor="image_url">Image URL:</label>
          <input
            id="image_url"
            value={editPlant.image_url}
            type="text"
            onChange={handleTextChange}
            placeholder="Image of Plant"
          />
        </div>
        <br />

        <div className="FormField">
          <label htmlFor="moisture_needs">Watering Needs:</label> <br />
          <label htmlFor="low_watering">Low Watering:</label>
          <input
            type="radio"
            id="low_watering"
            name="moisture_needs"
            value={"Low Watering"}
            onChange={handleRadioChange}
          />
          <label htmlFor="moderate_watering">Moderate Watering:</label>
          <input
            type="radio"
            id="moderate_watering"
            name="moisture_needs"
            value={"Moderate Watering"}
            onChange={handleRadioChange}
          />
          <label htmlFor="water_often">Water Often:</label>
          <input
            type="radio"
            id="water_often"
            name="moisture_needs"
            value={"Water Often"}
            onChange={handleRadioChange}
          />
        </div>
        <br />

        <div className="FormField">
          <label htmlFor="safe_for_pets">Pet Safe:</label>
          <input
            id="safe_for_pets"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={editPlant.safe_for_pets}
          />
        </div>
        <br />

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />

      <div className="back-button">
        <Link to={`/plants/${index}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
