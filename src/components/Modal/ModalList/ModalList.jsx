import { NavLink } from "react-router-dom";
import s from "./ModalList.module.css";

const ModalList = ({ close }) => {
  return (
    <ul className={s.list}>
      <li>
        <NavLink onClick={close} to="./menuPage">
          menu
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} to="./reservationPage">
          reservation
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} to="./aboutPage">
          about
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} to="./contactsPage">
          contacts
        </NavLink>
      </li>
      <li>blog</li>
    </ul>
  );
};

export default ModalList;
