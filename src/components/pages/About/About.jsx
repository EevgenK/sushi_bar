import MenuHero from "../../MenuHero/MenuHero";
import imgFirst from "../../../assets/img/about_img.jpg";
import imgSecond from "../../../assets/img/story_img.jpg";
import ContentBox from "../../shared/ContentBox/ContentBox";
import ProjectsList from "../../shared/ProjectsList/ProjectsList";
import clsx from "clsx";
import s from "./About.module.css";
import Footer from "../../Footer/Footer";

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
