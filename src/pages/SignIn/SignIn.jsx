import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInWithPassword, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
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
      navigate(state ? state : "/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(state ? state : "/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <title>Sign In</title>
      <section className="min-h-[calc(100vh-284px)] my-16">
        <div className="card bg-base-100 w-full h-full max-w-sm mx-auto shrink-0 shadow-2xl">
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
                  className="input"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <Link className="link link-hover text-sm">
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
