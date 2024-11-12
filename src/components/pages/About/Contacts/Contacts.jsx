import clsx from "clsx";
import MenuHero from "../../../MenuHero/MenuHero";

import s from "./Contacts.module.css";
import MenuTitle from "../../../MenuTitle/MenuTitle";
import { useEffect, useState } from "react";

import { dishImages } from "../../../../assets/img/contacts/contacts";
import ImageLink from "../../../shared/ImageLink/ImageLink";
import data from "../../../../assets/data/contacts.json";
import List from "../../../shared/List/List";
import WorkingHoursList from "../../../WorkingHoursList/WorkingHoursList";

import Map from "react-map-gl/maplibre";
import Footer from "../../../Footer/Footer";
import ContactWrapper from "../../../ContactWrapper/ContactWrapper";

const Contacts = () => {
  const [map, setMap] = useState();
  const [workingHours, setWorkingHours] = useState([]);
  useEffect(() => {
    fetch("./workHours.json")
      .then((response) => response.json())
      .then((data) => setWorkingHours(data.working_hours))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);
  // useEffect(() => {
  //   const getMap = async () => {
  //     try {
  //       const data = await fetch("http://localhost:3000/api/data").then(
  //         (response) => response.json()
  //       );
  //       setMap(data);
  //     } catch (error) {
  //       console.log("Помилка:", error);
  //     }
  //   };
  //   getMap();
  // }, []);
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
          secondEl={<WorkingHoursList items={data} />}
          thirdEl={<p>here will be a map</p>}
        />

        {/* <Map
              initialViewState={{
                longitude: 30.523333,
                latitude: 50.450001,
                zoom: 14,
              }}
              style={{
                width: "100%",
                height: 400,
              }}
              mapStyle={map}
            /> */}

        <Footer />
      </div>
    </section>
  );
};

export default Contacts;
