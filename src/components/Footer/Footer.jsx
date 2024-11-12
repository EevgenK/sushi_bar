import s from "./Footer.module.css";

const Footer = ({ style }) => {
  return (
    <footer className={s[style]}>
      <ul className={s.list}>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://www.framer.com/marketplace/creator/pawel-gola/?via=pawelgola"
            target="_blank"
          >
            <span className={s.span}>&copy;</span> gola templates
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://eevgenk.github.io/Portfolio/"
            target="_blank"
          >
            developer
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://github.com/EevgenK/sushi_bar"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
