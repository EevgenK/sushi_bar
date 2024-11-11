import clsx from "clsx";
import MenuHero from "../../../MenuPage/MenuHero/MenuHero";

import s from "./Contacts.module.css";
import MenuTitle from "../../../MenuPage/MenuTitle/MenuTitle";
import { useEffect, useState } from "react";

import { dishImages } from "../../../../assets/img/contacts/contacts";
import ImageLink from "../../../shared/ImageLink/ImageLink";
import data from "../../../../assets/data/contacts.json";
import List from "../../../shared/List/List";
import WorkingHoursList from "../../../WorkingHoursList/WorkingHoursList";

import Map from "react-map-gl/maplibre";

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
        <div className={s.wrapper}>
          <div className={s.first}>
            <MenuTitle style="contacts" text="Opening Hours" />
            <WorkingHoursList items={workingHours} />
          </div>
          <div className={s.second}>
            <List data={dishImages} element={ImageLink} />
          </div>
        </div>
        <div className={clsx(s.wrapper, s.reversed)}>
          <div className={s.first}>
            <MenuTitle style="contacts" text="Get in touch" />
            <WorkingHoursList items={data} />
          </div>
          <div className={clsx(s.second, s.map)}>
            <p>here will br a map</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
