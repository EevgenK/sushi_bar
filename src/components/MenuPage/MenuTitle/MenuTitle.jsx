import s from "./MenuTitle.module.css";

const MenuTitle = ({ text }) => {
  return <h5 className={s.title}>{text}</h5>;
};

export default MenuTitle;
