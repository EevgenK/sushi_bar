import imgFirst from "../../assets/img/about_img.jpg";
import imgSecond from "../../assets/img/story_img.jpg";
import ContentBox from "../../components/shared/ContentBox/ContentBox";
import ProjectsList from "../../components/shared/ProjectsList/ProjectsList";
import MenuHero from "../../components/MenuHero/MenuHero";
import Footer from "../../components/Footer/Footer";

import clsx from "clsx";
import s from "./About.module.css";

const About = () => {
  return (
    <section className={clsx("section", s.menu)}>
      <MenuHero page="about" title="about" />
      <div className={clsx("container", s.box)}>
        <ContentBox
          img={imgFirst}
          title="Sushi Artistry Redefined"
          paragraph="Where culinary craftsmanship meets modern elegance. Indulge in the
          finest sushi, expertly curated to elevate your dining experience."
        />
        <ProjectsList
          titles={["Trip Advisor", "Michelin Guide", "Star Dining"]}
        />
        <ContentBox
          img={imgSecond}
          title="Our Story"
          paragraph="Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy."
          style="reverse"
        />
        <Footer style="margin" />
      </div>
    </section>
  );
};

export default About;
