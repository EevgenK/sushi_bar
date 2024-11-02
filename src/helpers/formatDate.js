function formatedDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}
export default formatedDate;
