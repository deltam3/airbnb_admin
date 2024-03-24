import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`예약번호 #${data.id}가 성공적으로 체크아웃되었습니다.`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("에러가 발생했스빈다."),
  });

  return { checkout, isCheckingOut };
}
