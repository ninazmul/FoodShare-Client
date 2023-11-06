import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";


const AvailableFood = () => {

  const [available, setAvailable] = useState([]);

  useEffect(() => {
    fetch('available.json')
      .then(res => res.json())
      .then(data => setAvailable(data));
  },[])

    return (
      <div>
        <div className="py-6">
          <h1 className="text-5xl text-pink-700 font-bold text-center">
            Available Foods: {available.length}
          </h1>
          <p className="text-center">
            Explore the list of available food items from our generous community
            members. If you're in need, you can request these food items to help
            fulfill your hunger.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {
            available.map(food => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
          }
        </div>
      </div>
    );
};

export default AvailableFood;