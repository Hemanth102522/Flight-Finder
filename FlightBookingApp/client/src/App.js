import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Flights from "./pages/Flights";
import Admin from "./pages/Admin";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;