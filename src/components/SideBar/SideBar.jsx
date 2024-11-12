import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import s from "./SideBar.module.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button onClick={() => navigate("./menuPage")} className={s.btn}>
          Menu <IoMdArrowForward className={s.icon} />
        </button>
      </li>
      <li className={s.item}>
        <button onClick={() => navigate("./reservationPage")} className={s.btn}>
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
