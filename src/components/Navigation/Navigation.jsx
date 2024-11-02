import { NavLink, useLocation } from "react-router-dom";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import s from "./Navigation.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ModalList from "../Modal/ModalList/ModalList";
import { TbArrowLeftRhombus, TbArrowRightRhombus } from "react-icons/tb";

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Modal close={() => setModalOpen(false)}>
          <div className={s.decor}>
            <TbArrowLeftRhombus className={s.icon} />
            <TbArrowRightRhombus className={s.icon} />
          </div>
          <ModalList close={() => setModalOpen(false)} />
        </Modal>
      )}
    </nav>
  );
};

export default Navigation;
