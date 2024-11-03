import clsx from "clsx";
import s from "./About.module.css";
import MenuHero from "../../MenuPage/MenuHero/MenuHero";

import imgFirst from "../../../assets/img/about_img.jpg";
import Paragraph from "../../MenuPage/Paragraph/Paragraph";

const About = () => {
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="about" title="about" />
      <div className={clsx("container", s.box)}>
        <div className={s.first}>
          <h3 className={s.title}>Sushi Artistry Redefined</h3>
          <Paragraph>
            Where culinary craftsmanship meets modern elegance. Indulge in the
            finest sushi, expertly curated to elevate your dining experience.
          </Paragraph>
        </div>
        <img className={s.img} src={imgFirst} alt="qitchen" />
        <ul className={s.list}>
          <li className={s.item}>
            <h4>Trip Advisor</h4>
            <p>Best Steak House Prague</p>
          </li>
          <li className={s.item}>
            <h4>Michelin Guide</h4>
            <p>Best Steak House Prague</p>
          </li>
          <li className={s.item}>
            <h4>Star Dining</h4>
            <p>Best Steak House Prague</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
