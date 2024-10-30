import clsx from "clsx";
import s from "./MainPage.module.css";
import Socials from "./Socials/Socials";
import SideBar from "./SideBar/SideBar";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={s.section}>
      <div className={s.heroContainer}>
        <h1 className={s.title}>
          Sushi <br />
          Sensation
        </h1>
        <Socials />
      </div>
      <SideBar />
    </div>
  );
};

export default MainPage;
