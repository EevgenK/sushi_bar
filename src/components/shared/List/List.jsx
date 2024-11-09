import { nanoid } from "nanoid";
import s from "./List.module.css";

const List = ({ data, element: Element }) => {
  return (
    <ul className={s.list}>
      {data.map((el) => {
        return (
          <li className={s.item} key={nanoid()}>
            <Element data={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
