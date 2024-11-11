import clsx from "clsx";
import s from "./MenuPage.module.css";
import { useEffect } from "react";
import { maki, rolls, uramaki } from "../../assets/data/menu";
import MenuList from "./MenuList/MenuList";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuHero from "./MenuHero/MenuHero";

import MenuNavigation from "./MenuNavigation/MenuNavigation";
import Footer from "../Footer/Footer";
import WrapperBox from "../shared/WrapperBox/WrapperBox";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="menu" title="menu" />
      <div className={clsx("container", s.box)}>
        <WrapperBox>
          <MenuNavigation menu={["maki", "uramaki", "rolls"]} />
          <MenuTitle text="maki" />
          <MenuList dishKind={maki} />
          <MenuTitle text="uramaki" />
          <MenuList dishKind={uramaki} />
          <MenuTitle text="rolls" />
          <MenuList dishKind={rolls} />
        </WrapperBox>
        <Footer />
      </div>
    </section>
  );
};

export default MenuPage;
