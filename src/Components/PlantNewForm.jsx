import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function PlantNewForm() {
  const navigate = useNavigate();
  const [newPlant, setNewPlant] = useState({
    name: "",
    price: "",
    in_stock: true,
    description: "",
    moisture_needs: "",
    safe_for_pets: false,
    image_url: "",
  });

  const addPlant = () => {
    const plantData = {
      name: newPlant.name,
      price: newPlant.price,
      in_stock: newPlant.in_stock,
      description: newPlant.description,
      moisture_needs: newPlant.moisture_needs,
      safe_for_pets: newPlant.safe_for_pets,
      image_url: newPlant.image_url,
    };
    try {
      fetch(`${API}/plants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantData),
      })
        .then((res) => res.json())
        .then(() => navigate("/plants"));
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (event) => {
    setNewPlant({ ...newPlant, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewPlant({ ...newPlant, safe_for_pets: !newPlant.safe_for_pets });
  };

  const handleRadioChange = (event) => {
    setNewPlant({ ...newPlant, moisture_needs: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlant();
  };

  return (
    <div className="new_form_container">
      <h2>New plant form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newPlant.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Plant"
          required
        />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={newPlant.price}
          type="number"
          onChange={handleTextChange}
          placeholder="0"
          required
        />
        <br />

        <label htmlFor="description">description:</label>
        <input
          id="description"
          value={newPlant.description}
          type="text"
          onChange={handleTextChange}
          placeholder="Description"
          required
        />
        <br />

        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          value={newPlant.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Image of Plant"
        />
        <br />

        <label htmlFor="moisture_needs">Watering Needs:</label>

        <input
          type="radio"
          id="low_watering"
          name="moisture_needs"
          value={"Low Watering"}
          onChange={handleRadioChange}
        />
        <label htmlFor="low_watering">Low Watering</label>
        <input
          type="radio"
          id="moderate_watering"
          name="moisture_needs"
          value={"Moderate Watering"}
          onChange={handleRadioChange}
        />
        <label htmlFor="moderate_watering">Moderate Watering</label>
        <input
          type="radio"
          id="water_often"
          name="moisture_needs"
          value={"Water Often"}
          onChange={handleRadioChange}
        />
        <label htmlFor="water_often">Water Often</label>
        <br />

        <label htmlFor="safe_for_pets">Pet Safe:</label>
        <input
          id="safe_for_pets"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newPlant.safe_for_pets}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
        {console.log(newPlant)}
        <br />
        <br />
      </form>
        <Link to={`/plants`}>
          <button>Nevermind</button>
        </Link>
    </div>
  );
}
