import { nanoid } from "nanoid";
import s from "./ElementList.module.css";

const ElementList = ({ element, number }) => {
  const items = new Array(number).fill(element);
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={nanoid()}>{item}</li>
      ))}
    </ul>
  );
};

export default ElementList;
