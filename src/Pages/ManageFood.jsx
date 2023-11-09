import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import ManageRow from "./ManageRow";

const ManageFood = () => {
  const { user } = useContext(AuthContext);

  const [available, setAvailable] = useState([]);

  useEffect(() => {
    fetch(
      `https://food-share-server-pink.vercel.app/available?email=${user?.email}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => setAvailable(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this food item?");
    if (proceed) {
      fetch(`https://food-share-server-pink.vercel.app/available/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Food item deleted successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            const remainingAvailableItems = available.filter(
              (manage) => manage._id !== id
            );
            setAvailable(remainingAvailableItems);
          } else {
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the food item. Please try again later.",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
    }
  };

  return (
    <div>
      <div className="py-6">
        <h1 className="text-5xl text-pink-700 font-bold text-center">
          All Available Foods: {available.length}
        </h1>
        <p className="text-center">
          Explore the list of available food items from our generous community
          members. If you're in need, you can request these food items to help
          fulfill your hunger.
        </p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl flex md:space-x-24 px-20">
                <th>Food Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {available.map((manage) => (
                <ManageRow
                  key={manage._id}
                  manage={manage}
                  handleDelete={handleDelete}
                ></ManageRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
