import clsx from "clsx";
import s from "./ReservationPage.module.css";
import MenuHero from "../MenuPage/MenuHero/MenuHero";
import ReservationForm from "./ReservationForm/ReservationForm";
import MenuTitle from "../MenuPage/MenuTitle/MenuTitle";
import Paragraph from "../MenuPage/Paragraph/Paragraph";

const ReservationPage = () => {
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="reservation" title="book a table" />
      <div className={clsx("container", s.box)}>
        <MenuTitle text="Reservation" />
        <Paragraph
          text="Secure your spot at Qitchen, where exceptional sushi and a remarkable
      dining experience await."
        />
        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationPage;
