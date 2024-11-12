import { NavLink } from "react-router-dom";
import BurgerBtn from "./BurgerBtn/BurgerBtn";

import s from "./Navigation.module.css";

const Navigation = ({ openModal }) => {
  return (
    <nav className={s.navigation}>
      <BurgerBtn onClick={openModal} />
      <NavLink className={s.logo} to="/">
        Qitchen
      </NavLink>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="./menuPage">menu</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="./aboutPage">about</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="./reservationPage">book a table</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
