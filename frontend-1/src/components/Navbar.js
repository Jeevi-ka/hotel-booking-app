import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/")}>Hotel Booking</h3>

      <div className="nav-links">
        {!token && (
          <>
            <Link to="/user/login">User</Link>
            <Link to="/admin/login">Admin</Link>
          </>
        )}

        {role === "USER" && (
          <>
            <Link to="/hotels">Hotels</Link>
            <Link to="/bookings">Bookings</Link>
          </>
        )}

        {role === "ADMIN" && (
          <Link to="/admin/add-hotel">Add Hotel</Link>
        )}

        {token && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar;