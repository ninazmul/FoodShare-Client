import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignIn = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            });
    }
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-pink-700 text-center">
                Welcome to Food Share Community - Login
              </h1>
              <p className="py-6">
                At Food Share Community, we're dedicated to fostering a sense of
                togetherness and making a difference in the lives of those who
                need it most. To continue contributing to our mission, please
                log in to your account.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
              <form className="card-body" onSubmit={handleSignIn}>
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
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-pink-500"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-pink-700 text-white"
                    type="submit"
                    value="SignIn"
                  />
                </div>
                {
                  <p className="">
                    If you're new to Food Share Community, create an
                    <Link to="/signUp" className="text-pink-700 underline">
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

export default SignIn;