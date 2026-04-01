import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Role</h2>

      <button className="btn" onClick={() => navigate("/user/login")}>
        User
      </button>

      <button className="btn" onClick={() => navigate("/admin/login")}>
        Admin
      </button>
    </div>
  );
}

export default RoleSelect;