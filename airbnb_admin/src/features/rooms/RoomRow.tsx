import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { formatCurrency } from "../../utils/helpers.js";
import { deleteRoom } from "../../services/apiRooms.js";

import { toast } from "react-hot-toast";

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

function RoomRow({ room, error, children }) {
  const { id: roomId, name, regularPrice, image, maxCapacity, discount } = room;

  const queryClient = useQueryClient();

  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: (id) => deleteRoom(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["rooms"],
  //     });
  //   },
  //   onError: (err) => alert(err.message),
  // });

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("Room successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow role="row">
      <Img src={image}></Img>
      <Room>{name}</Room>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(roomId)} disabled={isDeleting}>
        Delete
      </button>
    </TableRow>
  );
}

export default RoomRow;
