import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRoom } from "../../services/apiRooms";
import { toast } from "react-hot-toast";

export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => createEditRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("방 성공적으로 수정되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editRoom };
}
