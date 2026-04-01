import { useState } from "react";
import API from "../api/axios";

function HotelList() {
  const [location,setLocation]=useState("");
  const [hotels,setHotels]=useState([]);

  const search=async()=>{
    const res=await API.get(`/hotels?location=${location}`);
    setHotels(res.data);
  };

  return (
    <div className="container">
      <h2>Hotels</h2>

      <input placeholder="Location" onChange={(e)=>setLocation(e.target.value)}/>
      <button className="btn" onClick={search}>Search</button>

      {hotels.map(h=>(
        <div className="card" key={h.id}>
          <h3>{h.name}</h3>
          <p>{h.location}</p>
          <button className="btn">Book</button>
        </div>
      ))}
    </div>
  );
}

export default HotelList;