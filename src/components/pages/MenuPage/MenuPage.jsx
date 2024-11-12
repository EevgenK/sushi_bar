import clsx from "clsx";

import { useEffect } from "react";
import { maki, rolls, uramaki } from "../../../assets/data/menu";
import MenuHero from "../../MenuHero/MenuHero";
import WrapperBox from "../../shared/WrapperBox/WrapperBox";
import MenuNavigation from "../../MenuNavigation/MenuNavigation";
import MenuTitle from "../../MenuTitle/MenuTitle";
import MenuList from "../../MenuList/MenuList";
import Footer from "../../Footer/Footer";
import s from "./MenuPage.module.css";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={clsx("section", s.main)}>
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
