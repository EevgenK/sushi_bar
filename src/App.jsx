import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import MenuPage from "./components/MenuPage/MenuPage";
import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";
import ReservationPage from "./components/ReservationPage/ReservationPage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/About/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menuPage" element={<MenuPage />} />
        <Route path="/reservationPage" element={<ReservationPage />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/contactsPage" element={<Contacts />} />
      </Routes>
      {/* {location.pathname !== "/" && <Footer />} */}
    </div>
  );
}

export default App;
