import clsx from "clsx";
import MenuHero from "../../../MenuPage/MenuHero/MenuHero";

import s from "./Contacts.module.css";
import MenuTitle from "../../../MenuPage/MenuTitle/MenuTitle";
import { useEffect, useState } from "react";
import WorkingHours from "../../../WorkingHours/WorkingHours";
import { dishImages } from "../../../../assets/img/contacts/contacts";
import ImageLink from "../../../shared/ImageLink/ImageLink";

import List from "../../../shared/List/List";

const Contacts = () => {
  const [workingHours, setWorkingHours] = useState([]);
  useEffect(() => {
    fetch("./workHours.json")
      .then((response) => response.json())
      .then((data) => setWorkingHours(data.working_hours))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="contacts" title="contacts" />
      <div className={clsx("container", s.box)}>
        <div className={s.wrapper}>
          <div className={s.first}>
            <MenuTitle style="contacts" text="Opening Hours" />
            <WorkingHours items={workingHours} />
          </div>
          <div className={s.second}>
            <List data={dishImages} element={ImageLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
