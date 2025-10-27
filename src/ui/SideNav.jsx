import { NavLink } from "react-router";
import Title from "./Title";
import { HiBookOpen, HiCog, HiHome, HiUser } from "react-icons/hi";

function SideNav() {
  return (
    <nav class="hidden absolute z-10 top-0 w-full h-full py-6 px-6 bg-white">
      <Title color="gray-600" size="xl" font="bold">
        Pastor John Wick.
      </Title>
      <ul class="my-6 flex flex-col items-start justify-between gap-5">
        <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-red-400">
          <HiHome size="1.5rem" />
          <NavLink to="dashboard" class="text-gray-950 text-xl font-bold">
            Dashboard
          </NavLink>
        </li>
        <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-red-400">
          <HiBookOpen size="1.5rem" />
          <NavLink to="dashboard" class="text-gray-950 text-xl font-bold">
            Sermons
          </NavLink>
        </li>
        <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-red-400">
          <HiUser size="1.5rem" />
          <NavLink to="dashboard" class="text-gray-950 text-xl font-bold">
            Profile
          </NavLink>
        </li>
        <li class="w-full py-2 px-4 flex items-center justify-start rounded-lg gap-5 active:bg-red-400">
          <HiCog size="1.5rem" />
          <NavLink to="dashboard" class="text-gray-950 text-xl font-bold">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
