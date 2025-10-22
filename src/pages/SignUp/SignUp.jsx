import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Container from "../../components/Container/Container";
import { FcGoogle } from "react-icons/fc";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
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
          <form onSubmit={handleSignIn} className="card-body space-y-3.5">
            <h1 className="text-xl font-semibold text-black text-center">
              Create your account
            </h1>

            <fieldset className="fieldset gap-2.5 text-base">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo_url"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
              </div>

              <div className="relative">
                <label className="label">Password</label>
                <input
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

              <button disabled={loading} className="btn btn-primary mt-4">
                {loading ? "Signing Up..." : "SignUp"}
              </button>
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
