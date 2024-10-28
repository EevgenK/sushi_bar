import { IoMdArrowForward } from "react-icons/io";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button className={s.btn}>
          Menu <IoMdArrowForward className={s.icon} />
        </button>
      </li>
      <li className={s.item}>
        <button className={s.btn}>
          Reservation <IoMdArrowForward className={s.icon} />
        </button>
      </li>
      <li className={s.item}>
        <button className={s.btn}>
          Our Restaurant <IoMdArrowForward className={s.icon} />
        </button>
      </li>
    </ul>
  );
};

export default SideBar;
