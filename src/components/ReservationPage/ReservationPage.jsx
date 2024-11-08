import clsx from "clsx";
import { useEffect, useState } from "react";
import MenuHero from "../MenuPage/MenuHero/MenuHero";
import ReservationForm from "./ReservationForm/ReservationForm";
import MenuTitle from "../MenuPage/MenuTitle/MenuTitle";
import Paragraph from "../MenuPage/Paragraph/Paragraph";
import s from "./ReservationPage.module.css";
import Modal from "../Modal/Modal";

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
  }, [order]);

  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="reservation" title="book a table" />
      <div className={clsx("container", s.box)}>
        <MenuTitle text="Reservation" />
        <Paragraph>
          Secure your spot at Qitchen, where exceptional sushi and a remarkable
          dining experience await.
        </Paragraph>
        <ReservationForm getInfo={setOrder} />
        {modalOpen && (
          <Modal close={() => setModalOpen(false)}>
            <div className={s.decor}>
              <MenuTitle text="Thank you for booking!" />
              <Paragraph style="order">
                {order.clientname}, we are waiting for you
                {order.guests > 1 && (
                  <span> and {order.guests - 1} guests,</span>
                )}{" "}
                on {order.date} at {order.time} o`clock in our Qitchen.
                <br /> Our manager will contact you to find out more details.
                <br /> Looking forward to meet you!!!
              </Paragraph>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ReservationPage;
