import * as Yup from "yup";

const OPENING_TIME = 16 * 60; // 960 хвилин (16:00)
const CLOSING_TIME = 22 * 60 + 30; // 1350 хвилин (22:30)

// Функція для конвертації часу у хвилини
const timeToMinutes = (time) => {
  if (!time) return null;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

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
    .test("is-in-range", "We open at 16:00 and close at 22:30", (value) => {
      const totalMinutes = timeToMinutes(value);
      // Перевірка, чи значення часу в межах діапазону
      return (
        totalMinutes !== null &&
        totalMinutes >= OPENING_TIME &&
        totalMinutes <= CLOSING_TIME
      );
    }),

  // time: Yup.string()
  //   .required("Required")
  //   .min(16.0, "We open at 16:00")
  //   .min(22.0, "We close at 22:30"),
});

export default ReservationSchema;
