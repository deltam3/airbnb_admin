import { useState } from "react";

import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Rooms = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </Row>

      <img src="https://dkhpnhdpniqygqzuhiga.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg"></img>
      <Row>
        <RoomTable />
      </Row>
    </>
  );
};

export default Rooms;
