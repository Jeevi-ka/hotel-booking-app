import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <Link to="/admin/add-hotel">Add Hotel</Link><br />
      <Link to="/admin/bookings">View Bookings</Link>
    </div>
  );
}

export default AdminDashboard;