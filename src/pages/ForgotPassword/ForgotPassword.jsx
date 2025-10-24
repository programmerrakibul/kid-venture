import { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import ForgetEmailContext from "../../contexts/ForgetEmailContext";
import MyButton from "../../components/MyButton/MyButton";

const ForgotPassword = () => {
  const { forgetEmail, setForgetEmail } = useContext(ForgetEmailContext);
  const [loading, setLoading] = useState(false);
  const { sendResetEmail } = useAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = form.email.value;

    try {
      await sendResetEmail(email);
      toast.success("Reset mail successfully send!");
      setForgetEmail("");
      form.reset();
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Reset Password</title>

      <section className="min-h-[calc(100dvh-64px)] p-5  grid place-items-center">
        <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
          <form
            onSubmit={handleResetPassword}
            className="card-body text-base space-y-3"
          >
            <h1 className="text-xl font-semibold text-black text-center">
              Send Password Reset Email
            </h1>
            <fieldset className="fieldset gap-2.5 text-base">
              <div>
                <label
                  htmlFor="email"
                  className="label text-neutral font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={forgetEmail}
                  className="input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <MyButton disable={loading} className="btn-block mt-4">
                {loading ? "Sending..." : "Send"}
              </MyButton>
            </fieldset>

            <div>
              <Link to={-1} className="link link-hover font-medium">
                <FaArrowLeftLong className="inline-block mr-2" />
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
