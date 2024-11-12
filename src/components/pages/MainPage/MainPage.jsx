import Socials from "../../shared/Socials/Socials";
import SideBar from "../../SideBar/SideBar";
import { useEffect } from "react";

import s from "./MainPage.module.css";

const MainPage = ({ onClick }) => {
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
        <Socials onClick={onClick} />
      </div>
      <SideBar />
    </div>
  );
};

export default MainPage;
