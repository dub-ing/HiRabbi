import Sermon from "./Sermon";
import Spinner from "../../ui/Spinner";
import { useSermons } from "./useSermons";

function SermonsList() {
  const { data: sermons, isPending: isLoading } = useSermons();
  if (isLoading) return <Spinner />;
  return (
    <div class="w-full h-[73vh] my-2 overflow-auto">
      {sermons?.map((sermon) => (
        <Sermon sermon={sermon} key={sermon.id} />
      ))}
    </div>
  );
}

export default SermonsList;
