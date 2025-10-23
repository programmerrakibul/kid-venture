import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import useAuth from "../hooks/useAuth";
import PageLoader from "../components/PageLoader/PageLoader";
import useToysData from "../hooks/useToysData";
import useRouterLoader from "../hooks/useRouterLoader";

const RootLayout = () => {
  const { loading: authLoading } = useAuth();
  const { loading: dataLoading } = useToysData();
  const { loading: routeLoading } = useRouterLoader();

  return (
    <>
      {authLoading || dataLoading || routeLoading ? (
        <PageLoader />
      ) : (
        <>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main className="space-y-16">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default RootLayout;
