import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function RoomTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "모든" },
          { value: "no-discount", label: "할인 없는 방들만" },
          { value: "with-discount", label: "할인 있는 방들만" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "이름순으로 분류" },
          { value: "name-desc", label: "역이름순으로 분류" },
          { value: "regularPrice-asc", label: "낮은 가격부터 분류" },
          { value: "regularPrice-desc", label: "높은 가격부터 분류" },
          { value: "maxCapacity-asc", label: "낮은 방 최대 인원부터 분류" },
          { value: "maxCapacity-desc", label: "높은 방 최대 인원부터 분류" },
        ]}
      />
    </TableOperations>
  );
}

export default RoomTableOperations;
