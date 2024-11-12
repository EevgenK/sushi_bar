import clsx from "clsx";
import s from "./MenuTitle.module.css";
import { TbArrowLeftRhombus, TbArrowRightRhombus } from "react-icons/tb";
const MenuTitle = ({ text, style }) => {
  return (
    <h5 id={text} className={clsx(s[style], s.title)}>
      <TbArrowLeftRhombus className={s.icon} />
      {text}
      <TbArrowRightRhombus className={s.icon} />
    </h5>
  );
};

export default MenuTitle;
