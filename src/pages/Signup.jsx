import SignupForm from "../features/authentication/SignupForm";
import InfoTitle from "../ui/InfoTitle";
import Logo from "../ui/Logo";

function Signup() {
    return (
      <div class="w-full h-screen py-5 px-5 flex flex-col items-center gap-5 text-center">
        <Logo />
        <InfoTitle subtitle="Sign Up" text='Create your sermon account' />
        <SignupForm />
      </div>
    );
}

export default Signup
