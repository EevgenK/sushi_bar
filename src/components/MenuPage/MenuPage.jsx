import clsx from "clsx";
import s from "./MenuPage.module.css";
// import "../../App.css";
import { maki, rolls } from "../../assets/data/menu";
import MenuList from "./MenuList/MenuList";
import MenuTitle from "./MenuTitle/MenuTitle";

const MenuPage = () => {
  return (
    <section className={clsx("section", s.menu)}>
      <div className={clsx("container", s.box)}>
        <MenuTitle text="maki" />
        <MenuList dishKind={maki} />
        <MenuTitle text="rolls" />
        <MenuList dishKind={rolls} />
      </div>
    </section>
  );
};

export default MenuPage;
