import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: false,
  })
    .replace("about ", "약 ")
    .replace("in", "안에")
    .replace("days", "일")
    .replace("day", "일")
    .replace("hours", "시간");

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

// export const formatCurrency = (value) =>
//   new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
//     value
//   );

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(value);
};
