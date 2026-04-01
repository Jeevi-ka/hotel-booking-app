import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        🏨 Hotel Booking
      </h2>

      <div>
        {!token && (
          <>
            <Link to="/user/login" style={styles.link}>User Login</Link>
            <Link to="/admin/login" style={styles.link}>Admin Login</Link>
          </>
        )}

        {token && role === "USER" && (
          <>
            <Link to="/user/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/hotels" style={styles.link}>Hotels</Link>
            <Link to="/bookings" style={styles.link}>My Bookings</Link>
          </>
        )}

        {token && role === "ADMIN" && (
          <>
            <Link to="/admin/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/admin/add-hotel" style={styles.link}>Add Hotel</Link>
          </>
        )}

        {token && (
          <button onClick={logout} style={styles.button}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    marginRight: "15px",
    textDecoration: "none"
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default Navbar;