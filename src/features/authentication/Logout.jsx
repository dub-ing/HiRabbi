import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { isPending, logout } = useLogout();
  if (isPending) return <Spinner />;
  return (
    <div onClick={logout} class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
      <HiOutlineLogout size="1.5rem" />
    </div>
  );
}

export default Logout;
