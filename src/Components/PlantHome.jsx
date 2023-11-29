import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Plant from "./Plant";
import Hero from "./Hero";
import "./Styles/Home.css";

const API = import.meta.env.VITE_API_URL;

export default function PlantHome() {
  const [plants, setPlants] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/plants`)
        .then((res) => res.json())
        .then((res) => {
          setPlants(res);
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="plant_home">
      <div className="announcement_bar">
        <h3>Announcement Bar</h3>
      </div>

      <Hero
        title={"Grand Opening Sale!"}
        img={
          "https://img.freepik.com/free-photo/tropical-palm-leaves-pattern-background-green-monstera-tree-foliage-decoration-design-plant-with-exotic-leaf-closeup_90220-1135.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701216000&semt=ais"
        }
      >
        <Link to={"/plants"}>Shop All Plants</Link>
        <Link to={"/"}>Shop Accessories</Link>
      </Hero>

      <br />
      <br />
      <br />

      <div className="section_header">
        <h2>Our Best-Selling Plants</h2>
        <div className="plants_container">
          {plants.slice(0, 3).map((plant) => {
            return <Plant key={plant.id} plant={plant} isHoverable />;
          })}
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* <div className="big_graphical_image_container2">
        <h2>big_graphical_image_container2</h2>
      </div> */}
      <Hero
        title={"Accessories"}
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kZPenz_X_mtnLUSIxhR6Wi0u_n_TGm7q5Q&usqp=CAU"
        }
      />
      <div className="section_header">
        <h2>Shop Our Accessories</h2>
      </div>
    </div>
  );
}
