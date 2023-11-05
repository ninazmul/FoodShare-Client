import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
      e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
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
                    className="btn bg-pink-700 text-white"
                    type="submit"
                    value="SignUp"
                  />
                </div>
                {
                  <p className="">
                    If you already have an account with us, log in here to
                    access your{" "}
                    <Link to="/signIn" className="text-pink-700 underline">
                      {" "}
                      account
                    </Link>{" "}
                    to join our community.
                  </p>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;