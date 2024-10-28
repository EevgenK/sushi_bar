import clsx from "clsx";
import s from "./MainPage.module.css";
import Socials from "./Socials/Socials";
import SideBar from "./SideBar/SideBar";

const MainPage = () => {
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
