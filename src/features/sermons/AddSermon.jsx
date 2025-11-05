import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { sermons } from "../../data/sermons";
import Title from "../../ui/Title";

function AddSermon({ handleClick }) {
  const [initialSermons, setInitialSermons] = useState(sermons);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    const newSermon = { ...data, id: 10 + Math.random(), questions: [] };
    setInitialSermons([...initialSermons, newSermon]);
    reset()
  }
  return (
    <div class="absolute top-0 left-0 w-full h-screen flex items-center bg-[#000000c4]">
      <div class="w-[90%] m-auto rounded-lg bg-gray-50">
        <div class="w-full py-6 px-6 flex items-center justify-between">
          <Title size="xl" font="bold" color="gray-800">
            Add New Sermon
          </Title>
          <MdClose onClick={handleClick} size="1.3rem" color="#636262" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          class="py-6 px-6 flex flex-col justify-between gap-4"
        >
          <div class="flex flex-col items-start justify-between gap-2">
            <label class="text-xs text-gray-800 font-medium" htmlFor="topic">
              Sermon Topic
            </label>
            <input
              class={`w-full py-3 px-4 border border-gray-300 rounded-lg ${
                errors?.topic
                  ? "border-b-red-500"
                  : "focus:border-b-purple-deep border-[#f1f1f1]"
              }`}
              name="topic"
              type="text"
              placeholder="Enter Sermon Title"
              {...register("topic", {
                required: "This field is required",
                maxLength: 20,
              })}
            />
            {errors.topic && <span class='text-xs text-red-400'>{errors.topic?.message}</span>}
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
              }`}
              name="preacher"
              type="text"
              placeholder="Enter preacher name"
              {...register("preacher", { required: "this field is required" })}
            />
            {errors.preacher && <span class='text-xs text-red-400'>{errors.preacher?.message}</span>}
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
              }`}
              name="date"
              type="date"
              {...register("date", { required: "This field is required" })}
            />
            {errors.date && <span class='text-xs text-red-400'>{errors.date?.message}</span>}
          </div>
          <div class="flex flex-col items-start justify-between gap-2">
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
              }`}
              name="biblePassage"
              type="text"
              placeholder="Enter bible refrence"
              {...register("biblePassage", {
                required: "This field is required",
              })}
            />
            {errors.biblePassage && <span class='text-xs text-red-400'>{errors.biblePassage?.message}</span>}
          </div>
          <div class="flex flex-col items-start justify-between gap-2">
            <label
              class="text-xs text-gray-800 font-medium"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              class={`w-full h-30 py-3 px-4 border border-gray-300 rounded-lg ${
                errors?.description
                  ? "border-b-red-500"
                  : "focus:border-b-purple-deep border-[#f1f1f1]"
              }`}
              name="description"
              type="text"
              placeholder="Brief summary of the sermon"
              {...register("description", {
                required: "This field is required",
              })}
            />
            {errors.description && <span class='text-xs text-red-400'>{errors.description?.message}</span>}
          </div>
          <div class="w-full pt-4 flex items-center justify-between gap-3">
            <button
              type="submit"
              class="w-2/3 py-4 text-sm text-gray-200 font-medium bg-[#334E68] disabled:bg-gray-500 rounded-lg"
            >
              Add Sermon
            </button>
            <button
              onClick={handleClick}
              class="w-1/3 py-4 text-sm font-medium rounded-lg border border-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSermon;
