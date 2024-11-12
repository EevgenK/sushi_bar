export function formatedDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export const formattedTime = (time) => {
  if (!time) return "";

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};
