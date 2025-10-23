import { PropagateLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="min-h-dvh w-full grid place-items-center">
      <PropagateLoader color="#615FFF" />
    </div>
  );
};

export default PageLoader;
