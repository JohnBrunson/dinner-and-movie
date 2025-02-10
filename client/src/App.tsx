import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
