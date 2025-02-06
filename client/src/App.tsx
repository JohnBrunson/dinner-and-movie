import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}