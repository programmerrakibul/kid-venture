import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Container from "../Container/Container";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser, SignOutUser } = useAuth();
  const navigate = useNavigate();
  const navLinks = ["home", "my profile", "explore toys"].map((item) => (
    <li key={item}>
      <NavLink
        to={item === "home" ? "/" : item.replace(" ", "-")}
        className="nav-link"
      >
        {item}
      </NavLink>
    </li>
  ));

  const handleSignOut = async () => {
    try {
      await SignOutUser();
      toast.success("Successfully signed out!");
    } catch (error) {
      const message = getAuthErrorMessage(error);
      toast.error(message);
    }
  };

  return (
    <nav className="nav-footer-linear shadow-md">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <Link to="/" className="logo">
              KidVenture
            </Link>
          </div>
          <div className="navbar-center fixed md:relative bottom-0 left-0 w-full md:w-auto px-5 md:px-0 nav-footer-linear md:bg-none! border-t-2 border-indigo-300 md:border-none z-10">
            <ul className="menu menu-horizontal justify-evenly w-full px-1 gap-3.5 sm:gap-5">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end gap-3.5">
            {!currentUser ? (
              <>
                <button
                  onClick={() => navigate("signin")}
                  className="btn-primary nav-btn"
                >
                  SignIn
                </button>
              </>
            ) : (
              <>
                <div className="relative group">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 size-8 md:size-10 rounded-full ring-2 bg-primary-content">
                      <img
                        src={currentUser.photoURL}
                        alt={currentUser.displayName}
                      />
                    </div>
                  </div>
                  <p
                    tabIndex={0}
                    className="absolute top-14 group-hover:top-12 -right-6 bg-primary-content text-primary text-nowrap px-3 py-1.5 rounded-lg shadow-2xl invisible duration-300 group-hover:visible font-medium"
                  >
                    {currentUser.displayName}
                  </p>
                </div>

                <button
                  onClick={handleSignOut}
                  className="nav-btn btn-secondary"
                >
                  SignOut
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
