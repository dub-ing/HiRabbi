import { MdClose } from "react-icons/md";
import Title from "../../ui/Title";

function AddSermon() {
    return (
      <div class="absolute top-0 left-0 w-full h-screen flex items-center bg-[#000000c4]">
        <div class="w-[90%] m-auto rounded-lg bg-gray-50">
          <div class="w-full py-6 px-6 flex items-center justify-between">
            <Title size="xl" font="bold" color="gray-800">
              Add New Sermon
            </Title>
            <MdClose size="1.3rem" color="#636262" />
          </div>
          <div class="py-6 px-6 flex flex-col justify-between gap-6">
            <div class="flex flex-col items-start justify-between gap-2">
              <label class="text-xs text-gray-800 font-medium" htmlFor="title">
                Sermon Title
              </label>
              <input
                class="w-full py-3 px-4 border border-gray-300 rounded-lg"
                name="title"
                type="text"
                placeholder="Enter Sermon Title"
              />
            </div>
            <div class="flex flex-col items-start justify-between gap-2">
              <label class="text-xs text-gray-800 font-medium" htmlFor="title">
                Preacher
              </label>
              <input
                class="w-full py-3 px-4 border border-gray-300 rounded-lg"
                name="title"
                type="text"
                placeholder="Enter preacher name"
              />
            </div>
            <div class="flex flex-col items-start justify-between gap-2">
              <label class="text-xs text-gray-800 font-medium" htmlFor="title">
                Date
              </label>
              <input
                class="w-full py-3 px-4 border border-gray-300 rounded-lg"
                name="title"
                type="date"
              />
            </div>
            <div class="flex flex-col items-start justify-between gap-2">
              <label class="text-xs text-gray-800 font-medium" htmlFor="title">
                Bible Passage
              </label>
              <input
                class="w-full py-3 px-4 border border-gray-300 rounded-lg"
                name="title"
                type="text"
                placeholder="Enter bible refrence"
              />
            </div>
            <div class="flex flex-col items-start justify-between gap-2">
              <label class="text-xs text-gray-800 font-medium" htmlFor="title">
                Description
              </label>
              <textarea
                class="w-full h-[150px] py-3 px-4 border border-gray-300 rounded-lg"
                name="title"
                type="text"
                placeholder="Brief summary of the sermon"
              />
            </div>
            <div class="w-full pt-4 flex items-center justify-between gap-3">
              <button
                class="w-2/3 py-4 text-sm text-gray-200 font-medium bg-[#334E68] disabled:bg-gray-500 rounded-lg"
                disabled
              >
                Add Sermon
              </button>
              <button class="w-1/3 py-4 text-sm font-medium rounded-lg border border-gray-300">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddSermon
