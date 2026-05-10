export function formatPakistanDate(date: Date) {
  return new Intl.DateTimeFormat("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  }).format(date);
}
