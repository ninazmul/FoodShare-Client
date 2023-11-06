import { Link } from "react-router-dom";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import AvailableFoodCard from "../AvailableFoodCard";

const Home = () => {
  const [maxFood, setMaxFood] = useState([]);

  useEffect(() => {
    fetch("available.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = [...data].sort(
          (a, b) => b.foodQuantity - a.foodQuantity
        );
        const topFoods = sortedData.slice(0, 6);
        setMaxFood(topFoods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="py-4">
        <div>
          <h1 className="text-5xl text-pink-700 font-bold text-center">
            Featured Foods: {maxFood.length}
          </h1>
          <p className="text-center">
            Discover the most available food items with the highest quantity in
            our community. If you're in need, you can request these food items
            to help fulfill your hunger.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {maxFood.map((food) => (
            <AvailableFoodCard key={food._id} food={food} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/available" className="btn bg-pink-700 text-white">
            Show More
          </Link>
        </div>
        <div className="py-4">
          <h1 className="text-5xl text-pink-700 font-bold text-center">
            About Us
          </h1>
          <p className="text-xl">
            At Food Share Community, our journey began with a simple yet
            profound idea: to bridge the gap between abundance and scarcity. We
            are a passionate and driven group of individuals who believe in the
            power of sharing and caring. Our mission is clear - to ensure that
            no one in our community goes to bed hungry.{" "}
            <Link to="/about" className="text-pink-700 underline">
              Learn More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
