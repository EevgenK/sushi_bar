import clsx from "clsx";
import s from "./MenuHero.module.css";

const MenuHero = () => {
  return (
    <div className={clsx("container", s.hero)}>
      <h1 className={s.title}> menu</h1>
    </div>
  );
};

export default MenuHero;
