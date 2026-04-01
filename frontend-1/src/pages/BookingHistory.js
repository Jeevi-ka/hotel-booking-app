import { useEffect,useState } from "react";
import API from "../api/axios";

function BookingHistory(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    API.get("/bookings").then(res=>setData(res.data));
  },[]);

  return (
    <div className="container">
      <h2>Bookings</h2>

      {data.map(b=>(
        <div className="card" key={b.id}>
          Room: {b.room.id} | Status: {b.status}
        </div>
      ))}
    </div>
  );
}

export default BookingHistory;