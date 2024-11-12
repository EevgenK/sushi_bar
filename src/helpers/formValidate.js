import * as Yup from "yup";
const today = new Date();
today.setHours(0, 0, 0, 0);
const regMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const ReservationSchema = Yup.object().shape({
  clientname: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Must be a valid phone")
    .required("Required"),
  email: Yup.string()
    .matches(regMail, "Must be a valid email!")
    .required("Required"),
  //   guests: Yup.number
  date: Yup.date().required("Required").min(today, "Should be not in past"),
  guests: Yup.number()
    .required("Required")
    .positive("Should be positive!")
    .integer("Should be integer!"),

  time: Yup.string()
    .required("Required")
    .min(16.0, "We open at 16:00")
    .min(22.0, "We close at 22:30"),
});

export default ReservationSchema;
