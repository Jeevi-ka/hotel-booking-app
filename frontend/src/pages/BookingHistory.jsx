import { useEffect, useState } from "react";
import API from "../api/axios";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get("/bookings").then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map(b => (
        <div key={b.id}>
          Room ID: {b.room.id} | Status: {b.status}
        </div>
      ))}
    </div>
  );
}

export default BookingHistory;