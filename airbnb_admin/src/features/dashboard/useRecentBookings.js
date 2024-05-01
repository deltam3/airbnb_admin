import { useQuery } from "@tanstack/react-query";
import { sub } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const num = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = sub(new Date(), num).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${num}`],
  });

  return { isLoading, bookings };
}
