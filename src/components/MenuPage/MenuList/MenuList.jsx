import s from "./MenuList.module.css";
import { BiLeaf } from "react-icons/bi";
const MenuList = ({ dishKind }) => {
  const items = [];
  dishKind.map(({ id, img, imgX, name, top, description, price }) => {
    items.push(
      <li className={s.item} key={id}>
        <img
          srcSet={`${img} 1x, ${imgX} 2x`}
          src={img}
          alt={name}
          className={s.img}
        />
        <div className={s.card}>
          <h4 className={s.title}>
            {name}
            {top && <BiLeaf className={s.svg} />}
          </h4>
          <p className={s.description}>{description}</p>
          <p>Price: {price}$</p>
        </div>
      </li>
    );
  });
  return <ul className={s.list}>{items}</ul>;
};

export default MenuList;
