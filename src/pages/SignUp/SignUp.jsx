import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Container from "../../components/Container/Container";
import { FcGoogle } from "react-icons/fc";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import MyButton from "../../components/MyButton/MyButton";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const displayName = form.name.value;
    const photoURL = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    const validatePassLen = /^.{6,}$/;
    const validatePassUpper = /[A-Z]/;
    const validatePassLower = /[a-z]/;

    if (!validatePassLen.test(password)) {
      toast.warn("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    if (!validatePassUpper.test(password)) {
      toast.warn("Password must contain at least one uppercase letter.");
      setLoading(false);
      return;
    }

    if (!validatePassLower.test(password)) {
      toast.warn("Password must contain at least one lowercase letter.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      await updateUserProfile({ ...user, displayName, photoURL });

      form.reset();
      toast.success("Successfully account created!");
      navigate("/");
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
      navigate("/");
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <title>Sign Up</title>

      <section className="min-h-[420px] my-16 px-5 grid place-items-center">
        <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body space-y-3.5">
            <h1 className="text-xl font-semibold text-black text-center">
              Create your account
            </h1>

            <fieldset className="fieldset gap-2.5 text-base">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="label text-neutral font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="label text-neutral font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="photo_url"
                  className="label text-neutral font-semibold"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo_url"
                  name="photo_url"
                  className="input"
                  placeholder="Enter photo url"
                  required
                />
              </div>

              <div className="space-y-1 relative">
                <label
                  htmlFor="password"
                  className="label text-neutral font-semibold"
                >
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-9 right-4 text-xl z-10"
                >
                  {show ? <IoIosEyeOff /> : <IoMdEye />}
                </span>
              </div>

              <MyButton disable={loading} className="btn-block mt-4">
                {loading ? "Signing Up..." : "SignUp"}
              </MyButton>

              <p className="text-center">
                Already have an account?
                <Link
                  to="/signin"
                  className="link link-hover text-secondary ml-1.5"
                >
                  SignIn
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

export default SignUp;
