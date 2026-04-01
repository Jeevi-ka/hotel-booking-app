import { useState } from "react";
import API from "../api/axios";

function HotelList() {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);

  const search = async () => {
    const res = await API.get(`/hotels?location=${location}`);
    setHotels(res.data);
  };

  return (
    <div>
      <h2>Search Hotels</h2>

      <input placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={search}>Search</button>

      {hotels.map(h => (
        <div key={h.id}>
          <h3>{h.name}</h3>
          <p>{h.location}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelList;