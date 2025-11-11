import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import Title from "../../ui/Title";
import { useCreateSermon } from "./useCreateSermon";
import Spinner from "../../ui/Spinner";
import { useEditSermon } from "./useEditSermon";

function AddSermonForm({ sermonEdit = {}, handleCloseModal }) {
  const { isPending: isCreating, createSermonAPI } = useCreateSermon();
  const {isEditing, editSermonAPI} = useEditSermon()
  const { id: editId, ...editValues } = sermonEdit;
  const isEditSession = Boolean(editId);
  const isLoading = isEditing || isCreating
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  function onSubmit(data) {
    if (isEditSession) {
      editSermonAPI({editedSermon: {...data}, id: editId});
      handleCloseModal?.()
    } else {
      createSermonAPI(data);
      reset();
      handleCloseModal?.();
    }
  }
  if (isLoading) return <Spinner />;
  return (
    <div class="w-[90%] m-auto rounded-lg bg-gray-50">
      <div class="w-full py-6 px-6 flex items-center justify-between">
        <Title size="xl" font="bold" color="gray-800">
          {isEditSession ? "Edit Sermon" : "Add Sermon"}
        </Title>
        {/* <MdClose onClick={handleCloseModal} size="1.3rem" color="#636262" /> */}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="py-6 px-6 flex flex-col justify-between gap-4"
      >
        <div class="flex flex-col items-start justify-between gap-2">
          <label class="text-xs text-gray-800 font-medium" htmlFor="title">
            Sermon Title
          </label>
          <input
            class={`w-full py-3 px-4 border border-gray-300 rounded-lg ${
              errors?.title
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            }disabled:bg-gray-500 disabled:cursor-not-allowed`}
            name="title"
            type="text"
            placeholder="Enter Sermon Title"
            disabled={isLoading}
            {...register("title", {
              required: "This field is required",
              maxLength: 20,
            })}
          />
          {errors.title && (
            <span class="text-xs text-red-400">{errors.title?.message}</span>
          )}
        </div>
        <div class="flex flex-col items-start justify-between gap-2">
          <label class="text-xs text-gray-800 font-medium" htmlFor="preacher">
            Preacher
          </label>
          <input
            class={`w-full py-3 px-4 border border-gray-300 rounded-lg ${
              errors?.preacher
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            } disabled:bg-gray-500 disabled:cursor-not-allowed`}
            name="preacher"
            type="text"
            placeholder="Enter preacher name"
            disabled={isLoading}
            {...register("preacher", { required: "this field is required" })}
          />
          {errors.preacher && (
            <span class="text-xs text-red-400">{errors.preacher?.message}</span>
          )}
        </div>
        <div class="flex flex-col items-start justify-between gap-2">
          <label class="text-xs text-gray-800 font-medium" htmlFor="date">
            Date
          </label>
          <input
            class={`w-full py-3 px-4 border border-gray-300 rounded-lg ${
              errors?.date
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            } disabled:bg-gray-500 disabled:cursor-not-allowed`}
            name="date"
            type="date"
            disabled={isLoading}
            {...register("date", { required: "This field is required" })}
          />
          {errors.date && (
            <span class="text-xs text-red-400">{errors.date?.message}</span>
          )}
        </div>
        {/* <div class="flex flex-col items-start justify-between gap-2">
            <label
              class="text-xs text-gray-800 font-medium"
              htmlFor="biblePassage"
            >
              Bible Passage
            </label>
            <input
              class={`w-full py-3 px-4 border border-gray-300 rounded-lg ${
                errors?.biblePassage
                  ? "border-b-red-500"
                  : "focus:border-b-purple-deep border-[#f1f1f1]"
              } disabled:bg-gray-500 disabled:cursor-not-allowed`}
              name="biblePassage"
              type="text"
              placeholder="Enter bible refrence"
              {...register("biblePassage", {
                required: "This field is required",
              })}
            />
            {errors.biblePassage && <span class='text-xs text-red-400'>{errors.biblePassage?.message}</span>}
          </div> */}
        <div class="flex flex-col items-start justify-between gap-2">
          <label class="text-xs text-gray-800 font-medium" htmlFor="summary">
            Summary
          </label>
          <textarea
            class={`w-full h-30 py-3 px-4 border border-gray-300 rounded-lg ${
              errors?.summary
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            } disabled:bg-gray-500 disabled:cursor-not-allowed`}
            name="summary"
            type="text"
            placeholder="Brief summary of the sermon"
            disabled={isLoading}
            {...register("summary", {
              required: "This field is required",
            })}
          />
          {errors.summary && (
            <span class="text-xs text-red-400">{errors.summary?.message}</span>
          )}
        </div>
        <div class="w-full pt-4 flex items-center justify-between gap-3">
          <button
            type="submit"
            class="w-2/3 py-4 text-sm text-gray-200 font-medium bg-[#334E68] disabled:bg-gray-500 rounded-lg"
            disabled={isLoading}
          >
            {isEditSession ? `Edit Sermon` : `Add Sermon`}
          </button>
          <button
            onClick={handleCloseModal}
            class="w-1/3 py-4 text-sm font-medium rounded-lg border border-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSermonForm;
