import {
  FaComment,
  FaQuestionCircle,
} from "react-icons/fa";
import Title from "../../ui/Title";
function NotificationInfo() {
  return (
    <div class="px-4 py-3">
      <div class="py-3">
        <Title color="gray-900" size="2xl" font="bold">
          Notifications
        </Title>
      </div>
      <div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaQuestionCircle size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">
              New Questions
            </h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Recieve notifications for new questions
            </span>
          </div>
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaComment size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">
              Answers to Questions
            </h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Recieve notifications for answers to your questions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationInfo;
