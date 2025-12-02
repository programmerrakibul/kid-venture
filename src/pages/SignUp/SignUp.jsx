import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import MyButton from "../../components/MyButton/MyButton";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const displayName = form.name.value.trim();
    const photoURL = form.photo_url.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const validatePassLen = /^.{6,}$/;
    const validatePassUpper = /[A-Z]/;
    const validatePassLower = /[a-z]/;

    if (!displayName) {
      toast.warn("Invalid Name");
      setLoading(false);
      return;
    }

    if (!photoURL) {
      toast.warn("Invalid Photo URL");
      setLoading(false);
      return;
    }

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
      navigate("/", { replace: true });
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
      navigate("/", { replace: true });
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <title>Sign Up | KidVenture</title>

      <section className="min-h-[calc(50dvh-64px)] my-16 px-5 grid place-items-center">
        <div className="card bg-linear-to-l from-secondary/10 to-primary/10 w-full max-w-md mx-auto shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body space-y-3.5">
            <h1 className="text-xl font-semibold text-black text-center">
              Create your account
            </h1>
            <fieldset className="fieldset gap-2.5 text-base">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" name="name" holder="Enter your full name" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" holder="Enter your email" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="photo_url">Photo URL</Label>
                <Input type="text" name="photo_url" holder="Enter photo url" />
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
              className="btn bg-white hover:bg-transparent  text-black border-white shadow-none duration-300 transition-colors"
            >
              <FcGoogle size={18} /> SignUp with Google
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
