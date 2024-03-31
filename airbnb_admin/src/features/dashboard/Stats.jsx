import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, roomCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * roomCount);

  return (
    <>
      <Stat
        title="예약"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="매출"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="체크인 숫자"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="빈방 상태"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
