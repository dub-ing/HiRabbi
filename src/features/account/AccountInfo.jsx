import {
  FaLock,
  FaUserTie,
} from "react-icons/fa";
import Title from "../../ui/Title";
import InfoTitle from "../../ui/InfoTitle";
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
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaUserTie size="1.5rem" color="##E8F6FF" />
          </div>
          <InfoTitle
            subtitle="Profile"
            text="Manage your profile information"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-4 py-2">
          <div class="w-12 h-12 bg-[#E8F6FF] py-3 px-3 rounded-lg">
            <FaLock size="1.5rem" color="##E8F6FF" />
          </div>
          <InfoTitle
            subtitle="Password"
            text="Change your password"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
