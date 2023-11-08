import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <motion.div
      className="py-52 flex flex-col items-center gap-4"
      animate={{
        opacity: [0, 1],
        transition: {
          duration: 0.5,
        },
      }}
    >
      <motion.h1
        className="text-7xl font-bold text-center text-pink-700"
        animate={{
          scale: [0.5, 1],
          transition: {
            delay: 0.2,
          },
        }}
        whileHover={{
          rotate: [0, 15],
          transition: {
            duration: 0.2,
          },
        }}
      >
        Oh No!
      </motion.h1>
      <motion.p
        className="text-xl"
        animate={{
          opacity: [0, 1],
          transition: {
            delay: 0.4,
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        We couldn't find the page you were looking for.
      </motion.p>
      <Link
        to="/"
        className="btn bg-pink-700 text-white rounded-full"
        whileHover={{
          backgroundColor: "#fff",
          color: "pink",
          scale: 0.5, 
          transition: {
            duration: 0.2,
          },
        }}
      >
        Go to Homepage
      </Link>
    </motion.div>
  );
};

export default ErrorPage;
