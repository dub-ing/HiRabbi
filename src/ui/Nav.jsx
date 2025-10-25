import { SlMenu } from "react-icons/sl"
import Logo from "./Logo"

function Nav() {
    return (
        <div class='flex justify-between items-center py-4 px-4'>
            <Logo />
            <div>
                <SlMenu size='1.5rem'/>
            </div>
        </div>
    )
}

export default Nav
