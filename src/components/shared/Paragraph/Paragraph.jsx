import clsx from "clsx";
import s from "./Paragraph.module.css";
clsx;

const Paragraph = ({ children, style }) => {
  return (
    <p
      className={clsx(
        s.text,
        style === "order" && s.order,
        style === "box" && s.box
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
