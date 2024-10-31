import clsx from "clsx";
import s from "./MenuHero.module.css";

const MenuHero = ({ page, title }) => {
  return (
    <div className={clsx("container", s.hero, s[page])}>
      <h1 className={s.title}> {title}</h1>
    </div>
  );
};

export default MenuHero;
