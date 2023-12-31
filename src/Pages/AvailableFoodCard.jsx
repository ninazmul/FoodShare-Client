import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AvailableFoodCard = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    displayName,
    photoURL,
    pickupLocation,
    expiredDate,
    additionalNotes,
    available,
  } = food;

  return (
    <motion.div
      className="card h-[500px] glass"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        transition: {
          duration: 0.2,
        },
      }}
    >
      <figure>
        <motion.img
          className="w-full relative"
          src={foodImage}
          alt="car!"
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        />
        <span className="indicator-item badge text-white bg-pink-700 right-0 top-0 absolute">
          {available}
        </span>
      </figure>
      <div className="indicator"></div>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-2xl text-pink-700">{foodName}</h2>
          <p className="text-end">
            Quantity:{" "}
            <span className="text-pink-700 font-bold">{foodQuantity}</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">{displayName}</p>
          <img
            className="w-10 rounded-full border-2 border-pink-700"
            src={photoURL}
            alt=""
          />
        </div>
        <p>{additionalNotes}</p>
        <p>Pickup Location: {pickupLocation}</p>
        <p>Expired In: {expiredDate}</p>

        <p></p>
        <div className="card-actions justify-end">
          <Link
            to={`/available/${_id}`}
            className="btn bg-pink-700 text-white w-full"
          >
            View Details!
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailableFoodCard;
