import clsx from "clsx";
import s from "./Paragraph.module.css";
clsx;

const Paragraph = ({ children, order }) => {
  return <p className={clsx(s.text, order && s.order)}>{children}</p>;
};

export default Paragraph;
