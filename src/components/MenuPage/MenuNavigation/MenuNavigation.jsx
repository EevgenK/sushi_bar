import s from "./MenuNavigation.module.css";

const MenuNavigation = ({ menu }) => {
  const items = [];
  items.push(
    menu.map((el) => {
      return (
        <li key={el} className={s.item}>
          <a href={`#` + el}>{el}</a>
        </li>
      );
    })
  );

  return <ul className={s.list}>{items}</ul>;
};

export default MenuNavigation;
