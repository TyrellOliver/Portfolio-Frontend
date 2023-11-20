import { useState, useEffect } from "react";
import Plant from "./Plant";


const API = import.meta.env.VITE_API_URL;

export default function Plants() {
  const [plants, setPlants] = useState([])

const fetchData = async  () => {
  try {
    fetch(`${API}/plants`)
    .then((res)=>res.json())
    .then((res) => {
      setPlants(res);
    });
  } catch (error) {
    return error;
  }
}

useEffect(()=>{
  fetchData();
},[]);

  return (
    <div className="plants-container">
      <h2>Plants</h2>
      {plants.map((plant)=>{
        console.log(plant)
        return <Plant key={plant.id} plant={plant}/>
      })}
    </div>
  );
}
