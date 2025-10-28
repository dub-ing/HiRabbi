import {
  FaLock,
  FaUserTie,
} from "react-icons/fa";
import Title from "../../ui/Title";
function AccountInfo() {
  return (
    <div class="px-4 py-3">
      <div class="py-3">
        <Title color="gray-900" size="2xl" font="bold">
          Account
        </Title>
      </div>
      <div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaUserTie size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">
              Profile
            </h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Manage your profile information
            </span>
          </div>
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-gray-200 py-3 px-3 rounded-lg">
            <FaLock size="1.5rem" color="#152946" />
          </div>
          <div>
            <h3 class="text-lg text-[#0D121C] font-medium leading-6">
              Profile
            </h3>
            <span class="text-sm text-[#4F6E94] font-normal">
              Manage your profile information
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
