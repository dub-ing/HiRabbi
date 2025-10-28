import {
  FaLanguage,
  FaMoon,
} from "react-icons/fa";
import Title from "../../ui/Title";
function SettingsInfo() {
  return (
    <div class="px-4 py-3">
      <div class="py-3">
        <Title color="gray-900" size="2xl" font="bold">
          App Settings
        </Title>
      </div>
      <div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaMoon size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">Theme</h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Choose your preffered app theme
            </span>
          </div>
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaLanguage size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">
              Language
            </h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Select your preferred language
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsInfo;
