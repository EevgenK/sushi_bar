import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import s from "./ReservationForm.module.css";
import "../../App.css";
import ReservationSchema from "../../helpers/formValidate";
import { useState } from "react";
import { formatedDate, formattedTime } from "../../helpers/formatDate";

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
  const [selectedTime, setSelectedTime] = useState(null);
  const handleSubmit = (values, actions) => {
    getInfo(values);
    setSelectedDate(null);
    setSelectedTime(null);
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
            >
              {() => (
                <DatePicker
                  selected={selectedTime}
                  onChange={(time) => {
                    setSelectedTime(time);
                    setFieldValue("time", formattedTime(time));
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  placeholderText="Choose time"
                  className={s.time}
                  minTime={new Date().setHours(9, 0)}
                  maxTime={new Date().setHours(23, 30)}
                />
              )}
            </Field>
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
