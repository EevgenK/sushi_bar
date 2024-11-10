import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">Evgen Kulbachenko</a>
        </li>
        <li className={s.item}>
          <a href="#">SV</a>
        </li>
        <li className={s.item}>
          <a href="#">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
