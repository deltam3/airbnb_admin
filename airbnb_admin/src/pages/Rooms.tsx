import { useState } from "react";

import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import CreateRoomForm from "../features/rooms/CreateRoomForm";
import AddRoom from "../features/rooms/AddRoom";
import RoomTableOperations from "../features/rooms/RoomTableOperations";

const Rooms = () => {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">모든 방</Heading>
        <RoomTableOperations />
      </Row>

      <Row>
        <RoomTable />

        {/* <Button onClick={() => setShowForm((show) => !show)}>
          방 추가하기
        </Button>
        {showForm && <CreateRoomForm />} */}
        <AddRoom />
      </Row>
    </>
  );
};

export default Rooms;
