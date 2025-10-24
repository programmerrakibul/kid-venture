import { useNavigate } from "react-router";
import img from "../../assets/page-not-found.svg";
import MyButton from "../../components/MyButton/MyButton";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>Page Not Found</title>

      <section className="min-h-dvh w-full grid place-items-center">
        <div className="max-w-md text-center space-y-6">
          <img src={img} alt="Page Not Found" className="animate-pulse" />
          <h1 className="font-bold text-4xl text-neutral">Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <MyButton handleClick={() => navigate("/")}>Back to Home</MyButton>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
