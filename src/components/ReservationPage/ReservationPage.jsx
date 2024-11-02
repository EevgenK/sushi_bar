import clsx from "clsx";
import { useEffect, useState } from "react";
import MenuHero from "../MenuPage/MenuHero/MenuHero";
import ReservationForm from "./ReservationForm/ReservationForm";
import MenuTitle from "../MenuPage/MenuTitle/MenuTitle";
import Paragraph from "../MenuPage/Paragraph/Paragraph";
import s from "./ReservationPage.module.css";
import Modal from "../Modal/Modal";
import { TbArrowLeftRhombus, TbArrowRightRhombus } from "react-icons/tb";

const ReservationPage = () => {
  const [order, setOrder] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (Object.keys(order).length) {
      setModalOpen(true);
    }
    console.log(typeof order.guests);
  }, [order]);

  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="reservation" title="book a table" />
      <div className={clsx("container", s.box)}>
        <MenuTitle text="Reservation" />
        <Paragraph
          text="Secure your spot at Qitchen, where exceptional sushi and a remarkable
      dining experience await."
        />
        <ReservationForm getInfo={setOrder} />
        {modalOpen && (
          <Modal close={() => setModalOpen(false)}>
            <div className={s.decor}>
              <MenuTitle text="Thank you for booking!" />
              <Paragraph
                text={`${order.clientname}, we are waitng for you, ${
                  order.guests > 1 && `and your ${order.guest - 1} guests`
                }`}
              />
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ReservationPage;
