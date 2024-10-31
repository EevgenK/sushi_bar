import { Formik, Form, Field } from "formik";
import s from "./ReservationForm.module.css";
const ReservationForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={s.form}>
        <Field
          className={s.field}
          type="text"
          name="clientname"
          placeholder="Name"
        />
        <Field
          className={s.field}
          type="number"
          name="phone"
          placeholder="Phone Number"
        />
        <Field
          className={s.field}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          className={s.field}
          type="number"
          name="guests"
          placeholder="Guests"
        />
        <Field
          className={s.field}
          type="number"
          name="date"
          placeholder="Date"
        />
        <Field
          className={s.field}
          type="number"
          name="time"
          placeholder="Time"
        />
        <button className={s.btn} type="submit">
          reserve
        </button>
      </Form>
    </Formik>
  );
};
export default ReservationForm;
