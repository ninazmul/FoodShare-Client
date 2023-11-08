import { useEffect, useState } from "react";
import RequestedFoodCard from "./RequestedFoodCard";

const FoodReq = () => {
  const [Requested, setRequested] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    fetch("https://food-share-server-pink.vercel.app/requested")
      .then((res) => res.json())
      .then((data) => {
        setRequested(data);
        console.log(data);
      });
  }, []);

  const filteredRequestedFoods = Requested.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedRequestedFoods = [...filteredRequestedFoods].sort((a, b) => {
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
  console.log(sortedRequestedFoods);
  return (
    <div>
      <div className="py-6">
        <h1 className="text-5xl text-pink-700 font-bold text-center">
          My Food Request: {Requested.length}
        </h1>
        <div className="mt-4 mb-4 text-center flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by Food Name"
            className="input input-bordered border-pink-700 border-2 w-full max-w-xs relative"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="btn bg-pink-700 text-white" onClick={handleSort}>
            Sort by Expire Date ({sortOrder === "ascending" ? "Asc" : "Desc"})
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedRequestedFoods.map((request) => (
          <RequestedFoodCard
            key={request._id}
            request={request}
          ></RequestedFoodCard>
        ))}
      </div>
    </div>
  );
};
export default FoodReq;
