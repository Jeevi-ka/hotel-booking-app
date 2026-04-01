import { useState } from "react";
import API from "../api/axios";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const role = location.pathname.includes("admin") ? "ADMIN" : "USER";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data);
      localStorage.setItem("role", role);

      role === "ADMIN"
        ? navigate("/admin/dashboard")
        : navigate("/user/dashboard");

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>{role} Login</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input type="password" placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="btn">Login</button>
      </form>

      {/* ✅ Signup link only for USER */}
      {role === "USER" && (
        <p>
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/user/signup")}
          >
            Signup here
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;