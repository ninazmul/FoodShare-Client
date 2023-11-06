import { Link } from "react-router-dom";
import Header from "./Header/Header";
import AvailableFood from "../AvailableFood";

const Home = () => {
    return (
      <div>
        <Header></Header>
        <div className="py-4">
          <div>
            <AvailableFood></AvailableFood>
          </div>
          <div className="py-4">
            <h1 className="text-5xl text-pink-700 font-bold text-center">
              About Us
            </h1>
            <p className="text-xl">
              At Food Share Community, our journey began with a simple yet
              profound idea: to bridge the gap between abundance and scarcity.
              We are a passionate and driven group of individuals who believe in
              the power of sharing and caring. Our mission is clear - to ensure
              that no one in our community goes to bed hungry.{" "}
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