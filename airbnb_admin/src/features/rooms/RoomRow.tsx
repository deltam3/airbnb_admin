import styled from "styled-components";
import { useState } from "react";

import CreateRoomForm from "./CreateRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateRoom } from "./useCreateRoom";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function RoomRow({ room }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const { isCreating, createRoom } = useCreateRoom();

  const {
    id: roomId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = room;

  function handleDuplicate() {
    createRoom({
      name: `${name} 복사본`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Room>{name}</Room>
        <div>최대 인원 {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteRoom(roomId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateRoomForm roomToEdit={Room} />}
    </>
  );
}

export default RoomRow;
