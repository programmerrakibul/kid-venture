import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-284px)] space-y-16">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default RootLayout;
