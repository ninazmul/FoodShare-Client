import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateProfileInfo, user } =
    useContext(AuthContext); // Include the user from AuthContext
  const location = useLocation();
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    if (user && user.photoURL) {
      setUserPhoto(user.photoURL);
    }
  }, [user]);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(name, photo, user);

        if (user.photoURL) {
          setUserPhoto(user.photoURL);
        }

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
          title: "Signed up successfully",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user.photoURL) {
          setUserPhoto(user.photoURL);
        }

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
          title: "Signed in successfully",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-pink-700 text-center">
              Join Food Share Community - Sign Up
            </h1>
            <p className="py-6">
              At Food Share Community, we believe in the power of unity and
              compassion. Join our community to share extra food with the
              homeless and those in need.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-500">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-500">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-500">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-500">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-pink-700 text-xl text-white"
                  type="submit"
                  value="SignUp"
                />
              </div>
              {
                <p className="">
                  If you already have an account with us, log in here to access
                  your{" "}
                  <Link to="/signIn" className="text-pink-700 underline">
                    {" "}
                    account
                  </Link>{" "}
                  to join our community.
                </p>
              }
              <div className="text-center">
                <h1 className="py-2">Or</h1>
                <button
                  onClick={handleGoogleSignUp}
                  className="hover:text-white w-full text-xl border-2 rounded-lg flex justify-center items-center py-2 gap-2 hover:bg-pink-700  border-pink-700"
                >
                  <FcGoogle />
                  Google
                </button>
              </div>
              {userPhoto && (
                <img
                  src={userPhoto}
                  alt="User Photo"
                  className="rounded-full w-16 h-16 mx-auto mt-4"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
