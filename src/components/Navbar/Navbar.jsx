import Container from "../Container/Container";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import getAuthErrorMessage from "../../utilities/getErrorMessage";
import { toast } from "react-toastify";
import Avatar from "../Avatar/Avatar";
import MyButton from "../MyButton/MyButton";
import { CgProfile } from "react-icons/cg";
import { IoHomeSharp } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { FaGift } from "react-icons/fa";

const Navbar = () => {
  const { currentUser, SignOutUser } = useAuth();
  const navigate = useNavigate();
  const nav_items = [
    { id: 1, name: "Home", slug: "/", icon: <IoHomeSharp /> },
    { id: 1, name: "Profile", slug: "/profile", icon: <CgProfile /> },
    {
      id: 1,
      name: "Explore Toys",
      slug: "/explore-toys",
      icon: <GiBearFace />,
    },
    { id: 1, name: "Offers", slug: "/offers", icon: <FaGift /> },
  ];

  const navLinks = nav_items.map((item) => (
    <li key={item.id}>
      <NavLink to={item.slug} className="nav-link">
        <span className="md:hidden text-xl tooltip tooltip-top" data-tip={item.name}>
          {item.icon}
        </span>
        <span className="hidden md:inline-block">{item.name}</span>
      </NavLink>
    </li>
  ));

  const handleSignOut = async () => {
    try {
      await SignOutUser();
      navigate("/signin");
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
            <Link to="/" className="logo">
              KidVenture
            </Link>
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
                <div className="relative group">
                  <Avatar
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                    className={"size-8 md:size-10"}
                  />

                  <p
                    tabIndex={-1}
                    className="absolute top-14 group-hover:top-12 -right-6 bg-primary-content text-primary text-nowrap px-3 py-1.5 rounded-lg shadow-2xl invisible duration-300 group-hover:visible font-medium"
                  >
                    {currentUser.displayName}
                  </p>
                </div>

                <MyButton handleClick={handleSignOut} className="nav-btn">
                  SignOut
                </MyButton>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
