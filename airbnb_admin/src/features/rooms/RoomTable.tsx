import styled from "styled-components";

import { useRooms } from "./useRooms.js";
import RoomRow from "./RoomRow";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus.js";
import Table from "../../ui/Table.js";

import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const RoomTable = () => {
  const { isLoading, rooms } = useRooms();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!rooms.length) return <Empty resourceName="cabins" />;

  // 1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredRooms;
  if (filterValue === "all") filteredRooms = rooms;
  if (filterValue === "no-discount")
    filteredRooms = rooms.filter((room) => room.discount === 0);
  if (filterValue === "with-discount")
    filteredRooms = rooms.filter((room) => room.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = filteredRooms.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>이름</div>
          <div>최대 인원</div>
          <div>가격</div>
          <div>할인 값</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedRooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
};

export default RoomTable;
