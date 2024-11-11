import clsx from "clsx";
import s from "./ContactWrapper.module.css";

const ContactWrapper = ({
  secondStyle,
  style,
  fristEl: FirstEl,
  secondEl: SecondEl,
  thirdEl: ThirdEl,
}) => {
  return (
    <div className={clsx(s.wrapper, s[style])}>
      <div className={s.first}>
        {FirstEl}
        {SecondEl}
      </div>
      <div className={clsx(s.second, s[secondStyle])}>{ThirdEl}</div>
    </div>
  );
};

export default ContactWrapper;
