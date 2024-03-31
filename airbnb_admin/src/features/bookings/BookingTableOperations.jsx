import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "전체" },
          { value: "checked-out", label: "체크 아웃" },
          { value: "checked-in", label: "체크 인" },
          { value: "unconfirmed", label: "미확인" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "최근 날짜 순서부터" },
          { value: "startDate-asc", label: "더 빠른 날짜 순서부터" },
          {
            value: "totalPrice-desc",
            label: "높은 가격부터",
          },
          { value: "totalPrice-asc", label: "낮은 가격부터" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
