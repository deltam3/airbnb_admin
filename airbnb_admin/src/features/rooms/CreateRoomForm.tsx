import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateRoomForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    mutate(data);
  }

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("New Room successfully created");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="방 이름" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="최대 인원" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "입력하셔야 합니다",
            min: {
              value: 1,
              message: "1 이상이여야 합니다.",
            },
          })}
        />
      </FormRow>

      <FormRow label="가격" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "입력하셔야 합니다",
            min: {
              value: 1,
              message: "1 이상이여야 합니다",
            },
          })}
        />
      </FormRow>

      <FormRow label="할인" errors={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "입력하셔야 합니다",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "할인값은 가격보다 낮아야 합니다.",
          })}
        />
      </FormRow>

      <FormRow
        label="설명"
        disabled={isCreating}
        errors={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description")}
        />
      </FormRow>

      <FormRow label="방 사진">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          취소
        </Button>
        <Button disabled={isCreating}>방 추가하기</Button>
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;
