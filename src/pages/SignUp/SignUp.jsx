import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Container from "../../components/Container/Container";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const displayName = form.name.value;
    const photoURL = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    // const newPassword = form.newPassword.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      await updateUserProfile({ ...user, displayName, photoURL });
      console.log(user);

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Sign Up</title>
      <section className="min-h-[calc(100vh-284px)] my-16">
        <Container className="card bg-base-100 w-full h-full max-w-sm shrink-0 shadow-2xl">
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
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo_url"
                  className="input"
                  placeholder="Photo URL"
                />
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="newPassword"
                  className="input"
                  placeholder="New Password"
                />
              </div>

              <button disabled={loading} className="btn btn-primary mt-4">
                {loading ? "Signing Up..." : "SignUp"}
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="../login" className="link link-hover text-secondary">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
