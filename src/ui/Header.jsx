import { SlMenu } from "react-icons/sl";
import Nav from "./Nav";
import Title from "./Title";
import { HiUser } from "react-icons/hi";

function Header() {
  return (
    <div class="w-full py-4 px-4 flex justify-between items-center">
      <SlMenu size="1.5rem" />
      <Title color='gray-600' size='lg' font='bold'>Dashboard</Title>
      <div class='w-8 h-8 rounded-full bg-amber-200 px-1 py-1'>
        <HiUser size="1.5rem" />
      </div>
    </div>
  );
}

export default Header;
