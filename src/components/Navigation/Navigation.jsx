import BurgerBtn from "./BurgerBtn/BurgerBtn";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <BurgerBtn />
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
