// import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
// import { useCreateCabin } from "./useCreateCabin";
// import { useEditCabin } from "./useEditCabin";

// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateRoom } from "./useCreateRoom";
import { useEditRoom } from "./useEditRoom";

function CreateRoomForm({ roomToEdit = {}, onCloseModal }) {
  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      createRoom(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="방 이름" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="최대 인원" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
        disabled={isWorking}
        errors={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "필수 입력입니다.",
          })}
        />
      </FormRow>

      <FormRow label="방 사진">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "필수 입력입니다",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          취소
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "방 편집" : "방 추가"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;
