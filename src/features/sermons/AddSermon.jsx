import { useState } from "react";
import AddSermonForm from "./AddSermonForm";
import Title from "../../ui/Title";
import Modal from "../../ui/Modal";

function AddSermon() {
  const [openModal, setOpenModal] = useState(false);
  function handleCloseModal() {
    setOpenModal(!openModal);
  }
  return (
    <>
      <div class="flex items-center justify-between">
        <Title color="gray-800" size="xl" font="bold">
          Manage Sermons
        </Title>
        <button
          onClick={handleCloseModal}
          class="px-6 py-2 bg-orange-400 rounded-lg"
        >
          Add Sermon
        </button>
      </div>
      {openModal && (
        <Modal closeModal={handleCloseModal}>
          <AddSermonForm handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default AddSermon;
