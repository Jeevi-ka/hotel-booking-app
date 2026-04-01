import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>

      <Link to="/hotels">Search Hotels</Link><br />
      <Link to="/bookings">My Bookings</Link>
    </div>
  );
}

export default UserDashboard;