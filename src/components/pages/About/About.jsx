import clsx from "clsx";
import s from "./About.module.css";
import MenuHero from "../../MenuPage/MenuHero/MenuHero";

const About = () => {
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="about" title="about" />
      <div className={clsx("container", s.box)}></div>
    </section>
  );
};

export default About;
