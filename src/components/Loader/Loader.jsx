import { RotatingSquare } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <RotatingSquare
      visible={true}
      height="150"
      width="150"
      color="var(--text-default)"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass={s.wrapper}
    />
  );
};

export default Loader;
