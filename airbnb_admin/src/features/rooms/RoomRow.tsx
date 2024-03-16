import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

function RoomRow({ room }) {
  const { name, regularPrice, image, maxCapacity, discount } = room;

  return (
    <TableRow role="row">
      <Img src={image}></Img>
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button>Delete</button>
    </TableRow>
  );
}

export default RoomRow;
