import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
            <button className="btn btn-primary">SignIn</button>
            <button className="btn btn-primary">SignUp</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
