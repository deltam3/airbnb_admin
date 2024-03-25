import { useState } from "react";

import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import CreateRoomForm from "../features/rooms/CreateRoomForm";
import AddRoom from "../features/rooms/AddRoom";
import RoomTableOperations from "../features/rooms/RoomTableOperations";

const Rooms = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">모든 방</Heading>
        <RoomTableOperations />
      </Row>

      <Row>
        <RoomTable />
        <AddRoom />
      </Row>
    </>
  );
};

export default Rooms;
