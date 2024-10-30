import { NavLink, useLocation } from "react-router-dom";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import s from "./Navigation.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ModalList from "../Modal/ModalList/ModalList";

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <nav className={s.navigation}>
      <BurgerBtn onClick={() => setModalOpen(true)} />
      <NavLink className={s.logo} to="/">
        Qitchen
      </NavLink>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="./menuPage">menu</NavLink>
        </li>
        <li className={s.item}>
          <a href="">about</a>
        </li>
        <li className={s.item}>
          <a href="">book a table</a>
        </li>
      </ul>
      {modalOpen && (
        <Modal close={closeModal}>
          <ModalList close={closeModal} />
        </Modal>
      )}
    </nav>
  );
};

export default Navigation;
