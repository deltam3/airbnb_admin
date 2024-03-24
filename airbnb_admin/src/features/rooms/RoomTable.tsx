import styled from "styled-components";

import { useRooms } from "./useRooms.js";
import RoomRow from "./RoomRow";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus.js";
import Table from "../../ui/Table.js";

const RoomTable = () => {
  const { isLoading, rooms } = useRooms();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Room</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={rooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
};

export default RoomTable;
