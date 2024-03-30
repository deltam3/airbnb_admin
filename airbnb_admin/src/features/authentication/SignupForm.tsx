import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="이름" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "필수 입력입니다." })}
        />
      </FormRow>

      <FormRow label="이메일 주소" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "올바른 이메일 형식이어야 합니다.",
            },
          })}
        />
      </FormRow>

      <FormRow label="비밀번호 (최소 8글자)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "필수 입력입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8글자여야 합니다.",
            },
          })}
        />
      </FormRow>

      <FormRow label="비민번호 재입력" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "필수 입력입니다.",
            validate: (value) =>
              value === getValues().password || "비밀번호가 일치해야 합니다.",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          취소
        </Button>
        <Button disabled={isLoading}>새로운 사용자 만들기</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
