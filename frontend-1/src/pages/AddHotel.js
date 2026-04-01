import { useState } from "react";
import API from "../api/axios";

function AddHotel() {
  const [hotel,setHotel]=useState({name:"",location:"",amenities:""});

  const submit=async(e)=>{
    e.preventDefault();
    await API.post("/admin/hotels",hotel);
    alert("Added");
  };

  return (
    <div className="container">
      <h2>Add Hotel</h2>

      <form onSubmit={submit}>
        <input placeholder="Name" onChange={(e)=>setHotel({...hotel,name:e.target.value})}/>
        <input placeholder="Location" onChange={(e)=>setHotel({...hotel,location:e.target.value})}/>
        <input placeholder="Amenities" onChange={(e)=>setHotel({...hotel,amenities:e.target.value})}/>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default AddHotel;