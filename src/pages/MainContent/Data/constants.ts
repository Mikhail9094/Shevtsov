const date = new Date();
const day = String(date.getDate());
const month = String(date.getMonth() + 1);
const year = String(date.getFullYear());
export const dateString = day + month + year;
