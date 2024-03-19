import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRoom } from "../../services/apiRooms";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: createEditRoom,
    onSuccess: () => {
      toast.success("새로운 방 생성 완료!");
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRoom };
}
