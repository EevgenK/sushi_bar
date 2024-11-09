import s from "./WorkingHours.module.css";

const WorkingHours = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item, index) => (
        <li className={s.item} key={index}>
          <span>{Object.keys(item)[0]}</span>
          <span className={s.dots} />
          <span>{Object.values(item)[0]}</span>
        </li>
      ))}
    </ul>
  );
};

export default WorkingHours;
