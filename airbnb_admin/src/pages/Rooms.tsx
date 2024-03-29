import { useState } from "react";

import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

const Rooms = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">모든 방</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <RoomTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          방 추가하기
        </Button>
        {showForm && <CreateRoomForm />}
      </Row>
    </>
  );
};

export default Rooms;
