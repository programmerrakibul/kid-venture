import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Container from "../Container/Container";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <HiOutlineMenuAlt1 />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              to="/"
              className="text-2xl text-neutral font-extrabold font-['Raleway']"
            >
              KidVenture
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-3.5">
            {!currentUser ? (
              <>
                <button
                  onClick={() => navigate("signin")}
                  className="btn btn-primary"
                >
                  SignIn
                </button>
              </>
            ) : (
              <>
                <div className="relative group">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 size-10 rounded-full ring-2 bg-primary-content">
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

                <button onClick={handleSignOut} className="btn btn-secondary">
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
