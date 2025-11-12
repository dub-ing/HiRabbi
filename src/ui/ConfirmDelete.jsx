import Title from "./Title";
import { useDeleteSermon } from "../features/sermons/useDeleteSermon";

function ConfirmDelete({ handleCloseModal, sermonId }) {
  const { isDeleting, deleteSermonAPI } = useDeleteSermon();
  return (
    <>
      <div class="w-full py-4 px-6 flex items-center justify-between">
        <Title size="xl" font="bold" color="gray-800">
          Delete Sermon
        </Title>
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
          onClick={() => {
            deleteSermonAPI(sermonId);
            handleCloseModal?.();
          }}
          type="submit"
          class="w-1/3 py-2 text-sm text-gray-200 font-medium bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-lg"
          disabled={isDeleting}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default ConfirmDelete;
