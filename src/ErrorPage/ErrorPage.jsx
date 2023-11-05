import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="py-52 flex flex-col items-center gap-4">
        <h1 className="text-7xl font-bold text-center text-pink-700">Oh No!</h1>
        <p className="text-xl">We couldn't find the page you were looking for.</p>
        <Link to='/' className="btn bg-pink-700 text-white rounded-full">Go to Homepage</Link>
      </div>
    );
};

export default ErrorPage;