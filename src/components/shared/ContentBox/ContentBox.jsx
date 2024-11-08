import Paragraph from "../../MenuPage/Paragraph/Paragraph";
import clsx from "clsx";
import s from "./ContentBox.module.css";

const ContentBox = ({ img, paragraph, title, direction }) => {
  return (
    <div className={clsx(s.box, direction === "reverse" && s.reverse)}>
      <div className={s.first}>
        <h3 className={s.title}>{title}</h3>
        <Paragraph style="box">{paragraph}</Paragraph>
      </div>
      <img className={s.img} src={img} alt="qitchen" />
    </div>
  );
};

export default ContentBox;
