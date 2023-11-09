import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import AvailableFoodCard from "../AvailableFoodCard";
import Marquee from "react-fast-marquee";
import axios from "axios"; // Import Axios
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [maxFood, setMaxFood] = useState([]);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
    axios
      .get("https://food-share-server-pink.vercel.app/available")
      .then((response) => {
        const data = response.data;
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
        <div className="py-6">
          <h1
            data-aos="fade-left"
            className="text-5xl text-pink-700 font-bold text-center"
          >
            Featured Foods: {maxFood.length}
          </h1>
          <p data-aos="fade-right" className="text-center">
            Discover the most available food items with the highest quantity in
            our community. If you're in need, you can request these food items
            to help fulfill your hunger.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {maxFood.map((food) => (
            <AvailableFoodCard key={food._id} food={food} />
          ))}
        </div>
        <div data-aos="fade-down" className="text-center mt-4">
          <Link to="/available" className="btn bg-pink-700 text-white">
            Show More
          </Link>
        </div>
        <div className="py-4">
          <h1
            data-aos="fade-up"
            className="text-5xl text-pink-700 font-bold text-center"
          >
            About Us
          </h1>
          <p data-aos="fade-up" className="text-xl">
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
        <div className="py-6">
          <h1 className="text-5xl py-2 text-pink-700 font-bold text-center">
            Our Partners
          </h1>
          <Marquee>
            <div className="flex items-center space-x-20">
              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/WWyLDWm/245047432-393327432385210-1168424083158859995-n.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">
                  Chandra Cyclist
                </h1>
              </div>
              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/sjDGNNn/blood-worrior-bangladesh-logo.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">
                  Blood worrior
                </h1>
              </div>
              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/Bqnrb3B/HEALTH-HAVEN.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">
                  Health Heaven
                </h1>
              </div>
              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/WWsCv73/N-I-Logo.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">N.I. Nazmul</h1>
              </div>

              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/PrZPM1m/Untitled-1.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">Razzak Oils</h1>
              </div>
              <div className="flex-col item-center">
                <img
                  className="w-40"
                  src="https://i.ibb.co/4tTg0Lx/wild-world-logo-pngv.png"
                  alt=""
                />
                <h1 className="text-xl font-bold text-pink-700">Wild World</h1>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Home;
