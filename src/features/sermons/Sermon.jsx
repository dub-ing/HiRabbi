import { FaCalendarDay, FaCheckCircle, FaComment } from "react-icons/fa";
import Title from "../../ui/Title";
function Sermon({ sermon }) {
    const {topic, pastor, date, description, questions} = sermon
  return (
    <div class="py-6 my-3 px-6 border border-gray-200 rounded-xl bg-[#E8F6FF] overflow-scroll">
      <div class="flex flex-col items-start justify-between gap-3">
        <Title color="gray-800" size="lg" font="bold">
          {topic}
        </Title>
        <div class="flex items-center justify-between gap-6">
          <h4 class="text-xs text-[#4F6E94] font-normal">{pastor}</h4>
          <div class="flex justify-between gap-2">
            <FaCalendarDay color="#4F6E94" size="12px" />
            <span class="text-xs text-[#4F6E94] font-normal">
              {date}
            </span>
          </div>
        </div>
        <p class="text-sm text-[#4F6E94] font-normal">
          {description.slice(0, 50)}
        </p>
        <div class="text-xs text-[#4F6E94] font-normal flex items-center gap-6">
          <div class="flex items-center gap-2">
            <FaComment />
            <span>{`${
              questions ? questions.length : 0
            } total questions`}</span>
          </div>
          <div class="flex items-center gap-2 text-green-600">
            <FaCheckCircle />
            <span>8 answered</span>
          </div>
        </div>
        <div class="w-full border-t border-gray-200 pt-4 flex justify-between gap-4">
          <button class="w-1/3 px-4 py-2.5 bg-amber-200 rounded-lg">
            View
          </button>
          <button class="w-1/3 px-4 py-2.5 bg-gray-500 rounded-lg">Edit</button>
          <button class="w-1/3 px-4 py-2.5 bg-red-400 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sermon;
