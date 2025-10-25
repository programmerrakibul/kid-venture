import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import ForgetEmailContext from "../../contexts/ForgetEmailContext";
import MyButton from "../../components/MyButton/MyButton";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";

const SignIn = () => {
  const { signInWithPassword, signInWithGoogle } = useAuth();
  const { setForgetEmail } = useContext(ForgetEmailContext);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSignInWithPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      await signInWithPassword(email, password);
      form.reset();
      toast.success("Successfully signed in!");
      navigate(state ? state.path : "/", { replace: true });
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Successfully signed in!");
      navigate(state ? state.path : "/", { replace: true });
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <title>Sign In</title>

      <section className="min-h-[calc(70dvh-64px)] my-16 px-5 grid place-items-center">
        <div className="card bg-linear-to-l from-secondary/10 to-primary/10 w-full max-w-md mx-auto shrink-0 shadow-2xl">
          <form
            onSubmit={handleSignInWithPassword}
            className="card-body space-y-3.5"
          >
            <h1 className="text-xl font-semibold text-black text-center">
              SignIn to your account
            </h1>
            <fieldset className="fieldset gap-2.5 text-base">
              {state && (
                <div role="alert" className="p-2.5 text-center">
                  <span className="font-semibold text-red-500 text-base md:text-lg">
                    {state.message}
                  </span>
                </div>
              )}

              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setForgetEmail(e.target.value)}
                  holder="Enter your email"
                />
              </div>

              <div className="space-y-1 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  holder="Enter your password"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-9 right-4 text-xl z-10"
                >
                  {show ? <IoIosEyeOff /> : <IoMdEye />}
                </span>

                <div className="text-end">
                  <Link
                    to="/reset-password"
                    className="link link-hover text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <MyButton disable={loading} className="btn-block mt-4">
                {loading ? "Signing In..." : "SignIn"}
              </MyButton>

              <p className="text-center">
                Don't have an account?
                <Link
                  to="/signup"
                  className="link link-hover text-secondary ml-1.5"
                >
                  SignUp
                </Link>
              </p>
            </fieldset>

            <div className="divider">OR</div>

            <button
              onClick={handleSignInWithGoogle}
              type="button"
              className="btn bg-white hover:bg-transparent  text-black border-white shadow-none duration-300 transition-colors"
            >
              <FcGoogle size={18} /> SignIn with Google
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
