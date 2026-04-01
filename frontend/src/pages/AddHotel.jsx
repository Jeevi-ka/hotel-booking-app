import { useState } from "react";
import API from "../api/axios";

function AddHotel() {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    description: "",
    amenities: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/admin/hotels", hotel);
      alert("Hotel Added");
    } catch {
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Add Hotel</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name"
          onChange={(e) => setHotel({...hotel, name: e.target.value})}
        /><br />

        <input placeholder="Location"
          onChange={(e) => setHotel({...hotel, location: e.target.value})}
        /><br />

        <input placeholder="Amenities"
          onChange={(e) => setHotel({...hotel, amenities: e.target.value})}
        /><br />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddHotel;