import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbArrowLeftRhombus, TbArrowRightRhombus } from "react-icons/tb";
import MainPage from "./components/pages/MainPage/MainPage";

import Navigation from "./components/Navigation/Navigation";
import ReservationPage from "./components/pages/ReservationPage/ReservationPage";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/About/Contacts/Contacts";

import "modern-normalize";
import "./App.css";
import Modal from "./components/Modal/Modal";
import ModalList from "./components/Modal/ModalList/ModalList";
import MenuPage from "./components/pages/MenuPage/MenuPage";
import toast from "react-hot-toast";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClickedLink, setIsClickedLink] = useState(false);
  useEffect(() => {
    if (isClickedLink) {
      toast(
        <span>
          This is a demo version of the site. There are no active links to
          social networks. But you can always view the{" "}
          <a
            className="toast-link"
            href="https://eevgenk.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            developer's portfolio
          </a>
        </span>
      );
    }
    return () => {
      setIsClickedLink(false);
    };
  }, [isClickedLink]);
  return (
    <div className="app">
      <Navigation openModal={() => setModalOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              onClick={() => {
                setIsClickedLink(true);
              }}
            />
          }
        />
        <Route path="/menuPage" element={<MenuPage />} />
        <Route path="/reservationPage" element={<ReservationPage />} />
        <Route path="/aboutPage" element={<About />} />
        <Route
          path="/contactsPage"
          element={
            <Contacts
              onClick={() => {
                setIsClickedLink(true);
              }}
            />
          }
        />
      </Routes>
      {modalOpen && (
        <Modal close={() => setModalOpen(false)}>
          <div className="decor">
            <TbArrowLeftRhombus className="icon" />
            <TbArrowRightRhombus className="icon" />
          </div>
          <ModalList close={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
