import s from "./Navigation.module.css";
import clsx from "clsx";
import sprite from "../../assets/img/sprite.svg";
console.log(sprite);
const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <button className={s.burgerBtn}>
        <svg className={s.svg} width="41" height="41">
          <use href={clsx(sprite + "#icon-icon-menu")}></use>
        </svg>
      </button>
      <a className={s.logo} href="">
        Qitchen
      </a>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="">menu</a>
        </li>
        <li className={s.item}>
          <a href="">about</a>
        </li>
        <li className={s.item}>
          <a href="">book a table</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
