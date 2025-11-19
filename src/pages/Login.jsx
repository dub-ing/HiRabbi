import LoginForm from "../features/authentication/LoginForm"
import InfoTitle from "../ui/InfoTitle"
import Logo from "../ui/Logo"

function Login() {
    return (
      <div class="w-full h-screen py-5 px-5 flex items-center">
        <div class="flex flex-col items-center justify-between gap-5 mx-auto">
          <Logo />
          <InfoTitle subtitle="Log In To Your Account" />
          <LoginForm />
        </div>
      </div>
    );
}

export default Login
