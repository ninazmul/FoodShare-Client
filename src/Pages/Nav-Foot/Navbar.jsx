import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

  const { user, signOUT } = useContext(AuthContext);

  const handleSignOut = () => {
    signOUT()
      .then()
      .catch();
    
  }


    const navBtn = (
      <>
        <div className="">
          <ul className="flex gap-4 text-xl font-bold">
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/available"
            >
              <li>Available Foods</li>
            </NavLink>
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/add"
            >
              <li>Add Food</li>
            </NavLink>
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/manage"
            >
              <li>Manage My Foods</li>
            </NavLink>
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/request"
            >
              <li>My Food Request</li>
            </NavLink>
            <NavLink
              className="hover:text-pink-700 hover:border-b-2 border-pink-700"
              to="/about"
            >
              <li>About Us</li>
            </NavLink>
          </ul>
        </div>
      </>
    );
    return (
      <div className="">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navBtn}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img
                className="w-32"
                src="/public/Screenshot_from_2023-11-05_12-27-59-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBtn}</ul>
          </div>
          <div className="navbar-end gap-4">
            <ThemeToggle />
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-pink-700 text-white"
              >
                SignOut
              </button>
            ) : (
              <Link to="/signIn" className="btn bg-pink-700 text-white">
                SignIn
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;