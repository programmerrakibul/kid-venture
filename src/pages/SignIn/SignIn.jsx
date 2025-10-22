import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import ForgetEmailContext from "../../contexts/ForgetEmailContext";

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
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInWithPassword(email, password);
      form.reset();
      navigate(state ? state : "/");
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
      navigate(state ? state : "/");
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <title>Sign In</title>
      <section className="min-h-[420px] my-16 px-5 grid place-items-center">
        <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
          <form
            onSubmit={handleSignInWithPassword}
            className="card-body space-y-3.5"
          >
            <h1 className="text-xl font-semibold text-black text-center">
              SignIn to your account
            </h1>
            <fieldset className="fieldset gap-2.5 text-base">
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setForgetEmail(e.target.value)}
                  className="input"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-9 right-4 text-xl z-10"
                >
                  {show ? <IoIosEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <div>
                <Link to="/reset-password" className="link link-hover text-sm">
                  Forgot Password?
                </Link>
              </div>

              <button disabled={loading} className="btn btn-primary mt-4">
                {loading ? "Signing Up..." : "SignUp"}
              </button>

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
              className="btn btn-ghost bg-white text-black border-[#e5e5e5]"
            >
              <FcGoogle size={18} /> Login with Google
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
