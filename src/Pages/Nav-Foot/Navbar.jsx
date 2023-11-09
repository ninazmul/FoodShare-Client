import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Navbar = () => {

  const { user, signOUT } = useContext(AuthContext);

  const handleSignOut = () => {
    signOUT()
      .then()
      .catch();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed out successfully",
    });
    
  }


    const navBtn = (
      <>
        <div className="">
          <ul className="lg:flex gap-4 font-bold">
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
                  className="h-5 w-5 text-pink-700"
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
                className="menu menu-sm dropdown-content mt-3 p-2 shadow glass z-50 rounded-box w-52"
              >
                {navBtn}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img
                className="w-32"
                src="https://i.ibb.co/yRHD0Lk/Screenshot-from-2023-11-05-12-27-59-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBtn}</ul>
          </div>

          <div className="navbar-end flex items-center gap-4">
            <div>
              <ThemeToggle />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div>
                  {user ? (
                    <>
                      <div className="flex items-center gap-4">
                        <p className="text-pink-700 font-bold">
                          {user.displayName}
                        </p>
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="rounded-full w-10 h-10"
                        />
                      </div>
                    </>
                  ) : (
                    <Link to="/signIn" className="btn bg-pink-700 text-white">
                      SignIn
                    </Link>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow  rounded-box w-52"
              >
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;