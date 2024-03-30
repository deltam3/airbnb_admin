import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "사용자 계정이 성공적으로 생성되었습니다. 등록된 사용자 이메일로 계정 인증하세요."
      );
    },
  });

  return { signup, isLoading };
}
