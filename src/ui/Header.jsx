import { SlMenu } from "react-icons/sl";
import Title from "./Title";
import { HiOutlineArrowNarrowLeft, HiUser } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router";
import Logout from "../features/authentication/Logout";

function Header({ handleSideNav }) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname.slice(1).toUpperCase()
  return (
    <div class="w-full py-4 px-4 flex justify-between items-center">
      {currentPath == "DASHBOARD" ? (
        <SlMenu size="1.5rem" onClick={handleSideNav} />
      ) : (
        <HiOutlineArrowNarrowLeft
          size="1.5rem"
          onClick={() => {
            navigate(-1);
          }}
        />
      )}

      <Title color="gray-600" size="sm" font="bold">
        {currentPath}
      </Title>
      <div class="flex items-center justify-between gap-5">
        <div class="w-8 h-8 rounded-full bg-amber-200 px-1 py-1">
          <HiUser size="1.5rem" />
        </div>
        <Logout />
      </div>
    </div>
  );
}

export default Header;
