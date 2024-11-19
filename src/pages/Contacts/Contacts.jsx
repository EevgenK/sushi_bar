import { useEffect, useState } from "react";

import MenuHero from "../../components/MenuHero/MenuHero";
import MenuTitle from "../../components/MenuTitle/MenuTitle";
import { dishImages } from "../../assets/img/contacts/contacts";
import ImageLink from "../../components/shared/ImageLink/ImageLink";
import data from "../../assets/data/contacts.json";
import List from "../../components/shared/List/List";
import WorkingHoursList from "../../components/WorkingHoursList/WorkingHoursList";
import Footer from "../../components/Footer/Footer";
import ContactWrapper from "../../components/ContactWrapper/ContactWrapper";
import Socials from "../../components/shared/Socials/Socials";
import Loader from "../../components/Loader/Loader";
import MapLeaf from "../../components/MapLeaf/MapLeaf";
import clsx from "clsx";
import s from "./Contacts.module.css";

const Contacts = ({ onClick }) => {
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
        <ContactWrapper
          fristEl={<MenuTitle style="contacts" text="Opening Hours" />}
          secondEl={<WorkingHoursList items={workingHours} />}
          thirdEl={<List data={dishImages} element={ImageLink} />}
        />
        <ContactWrapper
          style="reversed"
          secondStyle="map"
          fristEl={<MenuTitle style="contacts" text="Get in touch" />}
          secondEl={
            <WorkingHoursList
              items={data}
              links={<Socials style="contacts" onClick={onClick} />}
            />
          }
          thirdEl={<MapLeaf /> ?? <Loader />}
        />

        <Footer style="margin" />
      </div>
    </section>
  );
};

export default Contacts;
