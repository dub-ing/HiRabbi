
import { sermons } from "../../data/sermons";
import Title from "../../ui/Title";
import Sermon from "./Sermon";

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
    </>
  );
}

export default SermonLayout;
