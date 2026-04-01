import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // ✅ add this

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddHotel from "./pages/AddHotel";
import HotelList from "./pages/HotelList";
import BookingHistory from "./pages/BookingHistory";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar added here */}

      <Routes>
        <Route path="/" element={<RoleSelect />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />

        <Route path="/admin/login" element={<Login />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/add-hotel" element={<AddHotel />} />

        <Route path="/hotels" element={<HotelList />} />
        <Route path="/bookings" element={<BookingHistory />} />
      </Routes>
    </>
  );
}

export default App;