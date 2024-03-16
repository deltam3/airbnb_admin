import { useState } from "react";

import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Rooms = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <RoomTable />
      </Row>
    </>
  );
};

export default Rooms;
