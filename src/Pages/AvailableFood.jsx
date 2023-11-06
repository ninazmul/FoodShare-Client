import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import { BsSearch } from "react-icons/bs";

const AvailableFood = () => {
  const [available, setAvailable] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    fetch("available.json")
      .then((res) => res.json())
      .then((data) => setAvailable(data));
  }, []);

  // Filter available foods based on the search query
  const filteredAvailableFoods = available.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort available foods based on Expire Date
  const sortedAvailableFoods = [...filteredAvailableFoods].sort((a, b) => {
    if (sortOrder === "ascending") {
      return new Date(a.expiredDate) - new Date(b.expiredDate);
    } else {
      return new Date(b.expiredDate) - new Date(a.expiredDate);
    }
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

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
        <div className="mt-4 mb-4 text-center flex justify-between">
          <input
            type="text"
            placeholder="Search by Food Name"
            className="input input-bordered border-pink-700 border-2 w-full max-w-xs relative"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="text-center mb-4">
            <button className="btn bg-pink-700 text-white" onClick={handleSort}>
              Sort by Expire Date ({sortOrder === "ascending" ? "Asc" : "Desc"})
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {sortedAvailableFoods.map((food) => (
          <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
