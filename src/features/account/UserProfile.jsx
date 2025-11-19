import { HiUser } from "react-icons/hi";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useProfile } from "../authentication/useProfile";

function UserProfile() {
  const {
    profile: { email, user_metadata },
  } = useProfile();
  const { fullName } = user_metadata;

  return (
    <>
      <div class="flex flex-col items-center justify-between text-center gap-4 py-4">
        <div class="w-[120px] h-[120px] rounded-full bg-amber-200 flex items-center justify-center">
          <HiUser size="100px" />
        </div>
        <div>
          <Title color="gray-900" size="2xl" font="bold">
            Pastor Wick
          </Title>
          <span class="text-gray-400 text-sm font-normal">{email}</span>
        </div>
      </div>
      <div class="">
        <div class="w-full py-3">
          <label htmlFor="" class="text-gray-900 text-sm font-medium pb-2">
            Name
          </label>
          <input
            type="text"
            class="disabled:bg-[#E8EDF2] w-full py-2 px-4 rounded-lg"
            value={fullName}
            disabled
          />
        </div>
        <div class="w-full py-3">
          <label htmlFor="" class="text-gray-900 text-sm font-medium pb-2">
            Email
          </label>
          <input
            type="email"
            class="disabled:bg-[#E8EDF2] w-full py-2 px-4 rounded-lg"
            value={email}
            disabled
          />
        </div>
        <div class="w-full py-3">
          <label htmlFor="" class="text-gray-900 text-sm font-medium pb-2">
            Bio
          </label>
          <textarea
            type="text"
            class="h-[150px] disabled:bg-[#E8EDF2] w-full py-2 px-4 rounded-lg"
            disabled
          />
        </div>
        <div class="w-full py-4 text-right">
          <Button bgColor="bg-gray-900" color="text-white" width="w-1/3">
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
