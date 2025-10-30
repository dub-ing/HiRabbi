
import { MdClose } from "react-icons/md";
import { sermons } from "../../data/sermons";
import Title from "../../ui/Title";
import Sermon from "./Sermon";
import AddSermon from "./AddSermon";

function SermonLayout() {
  return (
    <>
      <div class="flex items-center justify-between">
        <Title color="gray-800" size="xl" font="bold">
          Manage Sermons
        </Title>
        <button class="px-6 py-2 bg-orange-400 rounded-lg">Add Sermon</button>
      </div>
      {sermons.map((sermon) => (
        <Sermon sermon={sermon} key={sermon.id} />
      ))}
      <AddSermon />
    </>
  );
}

export default SermonLayout;
