import { useState } from "react";
import Title from "../../ui/Title";
import AddSermon from "./AddSermonForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
// import { deleteSermon } from "../../services/apiSermons";
import { FaCalendarDay, FaCheckCircle, FaComment } from "react-icons/fa";
function Sermon({ sermon }) {
  const [showForm, setShowForm] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { id, date, numAnswered, numQuestions, preacher, summary, title } =
    sermon;
  function handleCloseModal() {
    setShowForm(!showForm);
  }
  return (
    <>
      <div class="py-6 my-3 px-6 border border-gray-200 rounded-xl bg-[#E8F6FF]">
        <div class="flex flex-col items-start justify-between gap-3">
          <div class="w-full flex items-center justify-between">
            <Title color="gray-800" size="lg" font="bold">
              {title}
            </Title>
            <img class="w-10" src="memberGirl.png" alt="" />
          </div>
          <div class="flex items-center justify-between gap-6">
            <h4 class="text-xs text-[#4F6E94] font-normal">{preacher}</h4>
            <div class="flex justify-between gap-2">
              <FaCalendarDay color="#4F6E94" size="12px" />
              <span class="text-xs text-[#4F6E94] font-normal">{date}</span>
            </div>
          </div>
          <p class="text-sm text-[#4F6E94] font-normal">{summary}</p>
          <div class="text-xs text-[#4F6E94] font-normal flex items-center gap-6">
            <div class="flex items-center gap-2">
              <FaComment />
              <span>{`${numQuestions} total questions`}</span>
            </div>
            <div class="flex items-center gap-2 text-green-600">
              <FaCheckCircle />
              <span>{`${numAnswered} answered`}</span>
            </div>
          </div>
          <div class="w-full border-t border-gray-200 pt-4 flex justify-between gap-4">
            <button class="w-1/3 px-4 py-2 bg-amber-200 rounded-lg">
              View
            </button>
            <button
              onClick={() => setShowForm((showForm) => !showForm)}
              class="w-1/3 px-4 py-2 bg-gray-500 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteModal((deleteModal) => !deleteModal)}
              class="w-1/3 px-4 py-2 bg-red-400 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <Modal closeModal={handleCloseModal}>
          <AddSermon sermonEdit={sermon} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      {deleteModal && (
        <Modal closeModal={() => setDeleteModal((deleteModal) => !deleteModal)}>
          <ConfirmDelete
            sermonId={id}
            closeModal={() => setDeleteModal((deleteModal) => !deleteModal)}
          />
        </Modal>
      )}
    </>
  );
}

export default Sermon;
