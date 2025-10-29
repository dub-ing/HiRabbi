import {
  FaComment,
  FaQuestionCircle,
} from "react-icons/fa";
import Title from "../../ui/Title";
import InfoTitle from "../../ui/InfoTitle";
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
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaQuestionCircle size="1.5rem" color="#152946" />
          </div>
          <InfoTitle
            subtitle="New Questions"
            text="Recieve notifications for new questions"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaComment size="1.5rem" color="#152946" />
          </div>
          <InfoTitle
            subtitle="Answers to Questions"
            text="Recieve notifications for answers to your questions"
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationInfo;
