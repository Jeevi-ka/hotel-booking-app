import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Select Role</h1>

      <button onClick={() => navigate("/user/login")}>
        User
      </button>

      <button onClick={() => navigate("/admin/login")}>
        Admin
      </button>
    </div>
  );
}

export default RoleSelect;