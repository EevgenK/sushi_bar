import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="https://eevgenk.github.io/Portfolio/">
            Evgen Kulbachenko
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#">
            SV
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://github.com/EevgenK/sushi_bar">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
