import { useEffect } from "react";
import Socials from "../../components/shared/Socials/Socials";
import SideBar from "../../components/SideBar/SideBar";

import s from "./MainPage.module.css";

const MainPage = ({ onClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={s.section}>
      <div className={s.heroContainer}>
        <h1 className={s.title}>
          Sushi <br />
          Sensation
        </h1>
        <Socials onClick={onClick} />
      </div>
      <SideBar />
    </main>
  );
};

export default MainPage;
