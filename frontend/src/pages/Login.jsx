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

      if (role === "ADMIN") navigate("/admin/dashboard");
      else navigate("/user/dashboard");

    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>{role} Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        /><br />

        <input type="password" placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;