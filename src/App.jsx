import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import MenuPage from "./components/MenuPage/MenuPage";
import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";
import ReservationPage from "./components/ReservationPage/ReservationPage";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menuPage" element={<MenuPage />} />
        <Route path="/reservationPage" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
