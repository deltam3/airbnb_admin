import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">모든 예약</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable></BookingTable>
    </>
  );
};

export default Bookings;
