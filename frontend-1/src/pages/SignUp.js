import { useState } from "react";
import API from "../api/axios";

function Signup() {
  const [data, setData] = useState({ name:"", email:"", password:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", data);
    alert("Signup success");
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
        <input placeholder="Password" onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}

export default Signup;