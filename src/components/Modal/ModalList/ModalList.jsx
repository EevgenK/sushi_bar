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
      <li>reservation</li>
      <li>about</li>
      <li>contact</li>
      <li>blog</li>
    </ul>
  );
};

export default ModalList;
