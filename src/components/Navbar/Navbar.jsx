import Container from "../Container/Container";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import Avatar from "../Avatar/Avatar";
import MyButton from "../MyButton/MyButton";
import { IoHomeSharp } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { FaHeartPulse, FaPaperPlane } from "react-icons/fa6";

const Navbar = () => {
  const { currentUser, SignOutUser } = useAuth();
  const navigate = useNavigate();
  const nav_items = [
    { id: 1, name: "Home", slug: "/", icon: <IoHomeSharp /> },
    {
      id: 2,
      name: "Explore Toys",
      slug: "/explore-toys",
      icon: <GiBearFace />,
    },
    { id: 3, name: "Offers", slug: "/offers", icon: <FaGift /> },
    { id: 4, name: "Support", slug: "/support", icon: <FaHeartPulse /> },
    { id: 5, name: "Contact", slug: "/contact", icon: <FaPaperPlane /> },
  ];

  const navLinks = nav_items.map((item) => (
    <li key={item.id}>
      <NavLink to={item.slug} className="nav-link">
        <span
          className="md:hidden text-xl tooltip tooltip-top"
          data-tip={item.name}
        >
          {item.icon}
        </span>
        <span className="hidden md:inline-block">{item.name}</span>
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
    <nav className="nav-linear shadow-md">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <Logo />
          </div>
          <div className="navbar-center fixed md:relative bottom-0 left-0 w-full md:w-auto px-5 md:px-0 nav-linear md:bg-none! border-t-2 border-indigo-300 md:border-none z-10">
            <ul className="menu menu-horizontal justify-between w-full px-1 gap-3.5 sm:gap-5">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end gap-3.5">
            {!currentUser ? (
              <>
                <MyButton
                  handleClick={() => navigate("signin")}
                  className="nav-btn"
                >
                  SignIn
                </MyButton>
              </>
            ) : (
              <>
                <div className="group dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="cursor-pointer">
                    <Avatar
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                      className={"size-8 md:size-10"}
                    />
                  </div>

                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu text-base bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <div className="px-3 mb-1">
                      <strong>{currentUser.displayName}</strong>
                    </div>
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          isActive ? "bg-primary/10" : "hover:bg-primary/10"
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li className="mt-5 ">
                      <MyButton handleClick={handleSignOut} className="nav-btn">
                        SignOut
                      </MyButton>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
