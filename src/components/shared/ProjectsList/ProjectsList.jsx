import { nanoid } from "nanoid";
import s from "./ProjectsList.module.css";
import ElementList from "../ElementList/ElementList";
import { RiStarSFill } from "react-icons/ri";

const ProjectsList = ({ titles }) => {
  return (
    <ul className={s.list}>
      {titles.map((title) => {
        return (
          <li className={s.item} key={nanoid()}>
            <ElementList
              element={<RiStarSFill className={s.icon} />}
              number={5}
            />
            <h4>{title}</h4>
            <p>Best Steak House Prague</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsList;
