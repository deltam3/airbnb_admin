import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getRooms } from "../../services/apiRooms";
import RoomRow from "./RoomRow";
type Props = {};

const RoomTable = () => {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Room</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {rooms.map((room) => {
        <RoomRow room={room} key={room.id} />;
      })}
    </Table>
  );
};

export default RoomTable;
