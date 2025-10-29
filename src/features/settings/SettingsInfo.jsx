import {
  FaLanguage,
  FaMoon,
} from "react-icons/fa";
import Title from "../../ui/Title";
import InfoTitle from "../../ui/InfoTitle";
function SettingsInfo() {
  return (
    <div class="px-4 py-3">
      <div class="py-3">
        <Title color="[#E8F6FF]" size="2xl" font="bold">
          App Settings
        </Title>
      </div>
      <div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaMoon size="1.5rem" color="#152946" />
          </div>
          <InfoTitle subtitle="Theme" text="Choose your preffered app theme" />
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaLanguage size="1.5rem" color="#152946" />
          </div>
          <InfoTitle
            subtitle="Language"
            text="Select your preferred language"
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsInfo;
