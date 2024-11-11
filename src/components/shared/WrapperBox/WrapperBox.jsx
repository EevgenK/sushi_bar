import s from "./WrapperBox.module.css";

const WrapperBox = ({ children }) => (
  <div className={s.wrapper}>{children}</div>
);

export default WrapperBox;
