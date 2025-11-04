import { NavLink } from "react-router";
import Title from "./Title";
import { HiBookOpen, HiCog, HiHome, HiUser } from "react-icons/hi";
import { MdClose } from "react-icons/md";

function SideNav({ showSideNav, handleSideNav }) {
  return (
    <nav
      class={`${
        showSideNav ? `absolute` : "hidden"
      } z-10 top-0 w-full h-full bg-[#000000a4]`}
    >
      <div class={`w-3/4 h-full py-6 px-6 bg-white`}>
        <div class='w-full flex items-center justify-between'>
          <Title color="gray-600" size="xl" font="bold">
            Pastor John Wick.
          </Title>
          <MdClose onClick={handleSideNav} size="1.3rem" color="#636262" />
        </div>
        <ul class="my-6 flex flex-col items-start justify-between gap-5" onClick={handleSideNav}>
          <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-gray-400">
            <HiHome size="1.5rem" />
            <NavLink to="dashboard" class="text-gray-950 text-xl font-bold">
              Dashboard
            </NavLink>
          </li>
          <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-gray-400">
            <HiBookOpen size="1.5rem" />
            <NavLink to="sermons" class="text-gray-950 text-xl font-bold">
              Sermons
            </NavLink>
          </li>
          <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-gray-400">
            <HiUser size="1.5rem" />
            <NavLink to="profile" class="text-gray-950 text-xl font-bold">
              Profile
            </NavLink>
          </li>
          <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-gray-400">
            <HiCog size="1.5rem" />
            <NavLink to="settings" class="text-gray-950 text-xl font-bold">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
