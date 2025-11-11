import { MdClose } from "react-icons/md";
import Title from "./Title";

function ConfirmDelete({ handleCloseModal }) {
  return (
    <div class="absolute top-0 left-0 w-full h-screen flex items-center bg-[#00000059]">
      <div class="w-[90%] m-auto rounded-lg bg-gray-50">
        <div class="w-full py-3 px-6 flex items-center justify-between">
          <Title size="xl" font="bold" color="gray-800">
            Delete Sermon
          </Title>
          <MdClose onClick={handleCloseModal} size="1.3rem" color="#636262" />
        </div>
        <p class="px-6 py-3 text-sm">
          Are you sure you want to delete this sermon permanently? This action
          cannot be undone.
        </p>
        <div class="w-full py-4 px-6 flex items-center justify-end gap-3">
          <button
            onClick={handleCloseModal}
            class="w-1/3 py-2 text-sm font-medium rounded-lg border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="w-1/3 py-2 text-sm text-gray-200 font-medium bg-red-600 disabled:bg-gray-500 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
