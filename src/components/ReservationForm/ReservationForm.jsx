import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import s from "./ReservationForm.module.css";
import "../../App.css";
import ReservationSchema from "../../helpers/formValidate";
import { useState } from "react";
import formatedDate from "../../helpers/formatDate";

const initialValues = {
  clientname: "",
  phone: "",
  email: "",
  guests: "",
  date: "",
  time: "",
};

const ReservationForm = ({ getInfo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSubmit = (values, actions) => {
    getInfo(values);
    setSelectedDate(null);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ReservationSchema}
    >
      {({ setFieldValue }) => (
        <Form className={s.form}>
          <div className={s.box}>
            <Field
              className={s.field}
              type="text"
              name="clientname"
              placeholder="Name"
            />
            <ErrorMessage
              className={s.error}
              name="clientname"
              component="span"
            />
          </div>
          <div className={s.box}>
            <Field
              className={s.field}
              type="number"
              name="phone"
              placeholder="Phone Number"
            />
            <ErrorMessage className={s.error} name="phone" component="span" />
          </div>
          <div className={s.box}>
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.box}>
            <Field
              className={s.field}
              type="number"
              name="guests"
              placeholder="Guests"
            />
            <ErrorMessage className={s.error} name="guests" component="span" />
          </div>
          <div className={s.box}>
            <Field className={s.field} type="date" name="date">
              {() => (
                <DatePicker
                  className={s.picker}
                  calendarClassName="calendar"
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setFieldValue("date", formatedDate(date));
                  }}
                  dateFormat="dd.MM.yyyy"
                  placeholderText="Choose date"
                />
              )}
            </Field>
            <ErrorMessage className={s.error} name="date" component="span" />
          </div>
          <div className={s.box}>
            <Field
              className={s.field}
              type="time"
              name="time"
              placeholder="Time"
            />
            <ErrorMessage className={s.error} name="time" component="span" />
          </div>
          <button className={s.btn} type="submit">
            reserve
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ReservationForm;
