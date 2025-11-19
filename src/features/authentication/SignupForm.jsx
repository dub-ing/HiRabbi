import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useSignup } from "./useSignup";
import Spinner from "../../ui/Spinner";

function SignupForm() {
  const { handleSubmit, register, formState, getValues } = useForm();
  const { isPending, signup } = useSignup();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    const { email, password, fullName } = data;
    signup({ email, password, fullName });
  }
  if (isPending) return <Spinner />;
  return (
    <div class="w-full flex flex-col justify-between h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="my-3 w-full flex flex-col justify-between"
      >
        <div class="flex flex-col justify-between gap-5">
          <div class="flex flex-col items-start justify-between gap-2">
            <label class="text-xs text-gray-800 font-bold" htmlFor="fullName">
              Full Name
            </label>
            <input
              class={`w-full outline-0 py-3 px-4 border border-gray-300 rounded-lg ${
                errors.fullName
                  ? "border-b-red-500"
                  : "focus:border-gray-300 border-[#f1f1f1]"
              } disabled:bg-gray-500 disabled:cursor-not-allowed`}
              name="fullName"
              type="text"
              id="fullName"
              disabled={isPending}
              placeholder="first name and last name"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
            {errors.fullName && (
              <span class="text-xs text-red-400">
                {errors.fullName?.message}
              </span>
            )}
          </div>
          <div class="flex flex-col items-start justify-between gap-2">
            <label class="text-xs text-gray-800 font-bold" htmlFor="email">
              Email
            </label>
            <input
              class={`w-full outline-0 py-3 px-4 border border-gray-300 rounded-lg ${
                errors?.email ? "border-b-red-500" : "border-gray-300"
              }  disabled:bg-gray-500 disabled:cursor-not-allowed`}
              name="email"
              type="email"
              disabled={isPending}
              placeholder="first name and last name"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <span class="text-xs text-red-400">{errors.email?.message}</span>
            )}
          </div>
          <div class="flex flex-col items-start justify-between gap-2">
            <label class="text-xs text-gray-800 font-bold" htmlFor="password">
              Password
            </label>
            <input
              class={`w-full outline-0 py-3 px-4 border border-gray-300 rounded-lg ${
                errors.confirmPassword ? "border-b-red-500" : "border-gray-300"
              } disabled:bg-gray-500 disabled:cursor-not-allowed`}
              name="password"
              type="password"
              id="password"
              disabled={isPending}
              placeholder="create a password"
              {...register("password", {
                required: "This field is required",
              })}
            />
            {errors.password && (
              <span class="text-xs text-red-400">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div class="flex flex-col items-start justify-between gap-2">
            <label
              class="text-xs text-gray-800 font-bold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              class={`w-full outline-0 py-3 px-4 border border-gray-300 rounded-lg ${
                errors?.confirmPassword
                  ? "border-b-red-500"
                  : "focus:border-gray-300 border-[#f1f1f1]"
              } disabled:bg-gray-500 disabled:cursor-not-allowed`}
              name="confirmPassword"
              type="password"
              disabled={isPending}
              placeholder="first name and last name"
              {...register("confirmPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "password does not match",
              })}
            />
            {errors.confirmPassword && (
              <span class="text-xs text-red-400">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
        </div>
        <div class="text-center my-5 w-full">
          <button
            class="py-3 px-8 text-xs font-700 bg-[#f1f1f1] rounded-lg cursor-pointer disabled:cursor-not-allowed"
            // disabled={isLoading}
          >
            Creat account
          </button>
        </div>
      </form>
      <div class="text-center">
        <p class="text-xs font-500">
          Have an account ?{" "}
          <span class="text-purple-deep">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
