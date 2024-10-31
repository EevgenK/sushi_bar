import s from "./Paragraph.module.css";

const Paragraph = ({ text }) => {
  return <p className={s.text}>{text}</p>;
};

export default Paragraph;
