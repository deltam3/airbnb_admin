import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>Test</p>
      </Row>
      <BookingTable></BookingTable>
    </>
  );
};

export default Bookings;
