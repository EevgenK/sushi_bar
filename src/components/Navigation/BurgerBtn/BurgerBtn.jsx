import { RxHamburgerMenu, RxBorderSolid } from "react-icons/rx";
import s from "./BurgerBtn.module.css";
import { useState } from "react";

const BurgerBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={s.burgerBtn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <RxBorderSolid className={s.svg} />
      ) : (
        <RxHamburgerMenu className={s.svg} />
      )}
    </button>
  );
};

export default BurgerBtn;
