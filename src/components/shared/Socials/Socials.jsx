import clsx from "clsx";
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import s from "./Socials.module.css";

const Socials = ({ style }) => {
  return (
    <ul className={clsx(s.list, s[style])}>
      <li className={s.item}>
        <a href="">
          <SlSocialInstagram className={s.icon} />
        </a>
      </li>
      <li className={s.item}>
        <a href="">
          <RiFacebookCircleLine className={s.icon} />
        </a>
      </li>
      <li className={s.item}>
        <a href="">
          <PiTwitterLogo className={s.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
