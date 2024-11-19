import clsx from "clsx";

import { useEffect } from "react";
import { maki, rolls, uramaki } from "../../assets/data/menu";
import MenuHero from "../../components/MenuHero/MenuHero";
import WrapperBox from "../../components/shared/WrapperBox/WrapperBox";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import MenuTitle from "../../components/MenuTitle/MenuTitle";
import MenuList from "../../components/MenuList/MenuList";
import Footer from "../../components/Footer/Footer";
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
