import { IoMdArrowForward } from "react-icons/io";
import s from "./SideBar.module.css";
import menuImg from "../../../assets/img/menu_img.jpg";
import menuImgX from "../../../assets/img/menu_img2x.jpg";
import reservationImg from "../../../assets/img/reservation_img.jpg";
import reservationImgX from "../../../assets/img/reservation_img2x.jpg";
import restaurantImg from "../../../assets/img/restaurant_img.jpg";
import restaurantImgX from "../../../assets/img/restaurant_img2x.jpg";
const SideBar = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        {/* <img
          srcSet={`${menuImg} 1x,  ${menuImgX} 2x`}
          src={menuImg}
          alt="menu"
          className={s.img}
        /> */}
        <button className={s.btn}>
          Menu <IoMdArrowForward className={s.icon} />
        </button>
      </li>
      <li className={s.item}>
        {/* <img
          srcSet={`${reservationImg} 1x,  ${reservationImgX} 2x`}
          src={reservationImg}
          alt="reservation"
          className={s.img}
        /> */}
        <button className={s.btn}>
          Reservation <IoMdArrowForward className={s.icon} />
        </button>
      </li>
      <li className={s.item}>
        {/* <img
          srcSet={`${restaurantImg} 1x,  ${restaurantImgX} 2x`}
          src={restaurantImg}
          alt="restaurant"
          className={s.img}
        /> */}
        <button className={s.btn}>
          Our Restaurant <IoMdArrowForward className={s.icon} />
        </button>
      </li>
    </ul>
  );
};

export default SideBar;
