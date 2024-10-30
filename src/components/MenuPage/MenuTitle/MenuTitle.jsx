import s from "./MenuTitle.module.css";
import { TbArrowLeftRhombus, TbArrowRightRhombus } from "react-icons/tb";
const MenuTitle = ({ text }) => {
  return (
    <h5 className={s.title}>
      <TbArrowLeftRhombus className={s.icon} />
      {text}
      <TbArrowRightRhombus className={s.icon} />
    </h5>
  );
};

export default MenuTitle;
