import LoginForm from "../features/authentication/LoginForm"
import InfoTitle from "../ui/InfoTitle"
import Logo from "../ui/Logo"

function Login() {
    return (
        <div class='w-full py-5 px-5 flex flex-col items-center justify-between gap-5'>
            <Logo />
            <InfoTitle subtitle='Log In To Your Account'/>
            <LoginForm />
        </div>
    )
}

export default Login
