import { FaGithub } from "react-icons/fa6";
import s from "./ImageLink.module.css";

const ImageLink = ({ data }) => {
  return (
    <a className={s.link} href="https://github.com/EevgenK">
      <FaGithub className={s.icon} />
      <img
        srcSet={`${data.img} 1x, ${data.imgX} 2x`}
        src={data.img}
        alt="dish photo"
        className={s.img}
      />
    </a>
  );
};

export default ImageLink;
