import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { signInWithPassword } = useAuth();
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

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignInWithPassword} className="card-body">
        <h1 className="text-xl font-semibold text-black text-center">
          Login your account
        </h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <Link to="../password-reset" className="link link-hover">
              Forgot password?
            </Link>
          </div>

          <button disabled={loading} className="btn btn-neutral mt-4">
            {loading ? "Please wait.." : "Login"}
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="../register" className="link link-hover text-secondary">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
