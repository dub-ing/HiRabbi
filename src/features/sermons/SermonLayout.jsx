import { useState } from "react";
// import { sermons } from "../../data/sermons";
import Title from "../../ui/Title";
import Sermon from "./Sermon";
import AddSermon from "./AddSermon";
import { useSermons } from "./useSermons";

function SermonLayout() {
  const [openModal, setOpenModal] = useState(false);
  const {data: sermons} = useSermons()
  
  function handleClick() {
    setOpenModal(!openModal);
  }
  return (
    <>
      <div class="flex items-center justify-between">
        <Title color="gray-800" size="xl" font="bold">
          Manage Sermons
        </Title>
        <button
          onClick={handleClick}
          class="px-6 py-2 bg-orange-400 rounded-lg"
        >
          Add Sermon
        </button>
      </div>
      <div class="w-full h-[73vh] my-2 overflow-scroll">
        {sermons?.map((sermon) => (
          <Sermon sermon={sermon} key={sermon.id} />
        ))}
      </div>
        <div>more</div>
      {openModal && <AddSermon handleClick={handleClick} />}
    </>
  );
}

export default SermonLayout;
