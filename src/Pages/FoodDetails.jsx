import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const { user } = useContext(AuthContext);

  const handleRequest = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodId = form.foodId.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const foodImage = form.foodImage.value;
    const donorName = form.donorName.value;
    const requestDate = form.requestDate.value;
    const donorEmail = form.donorEmail.value;
    const userEmail = form.userEmail.value;
    const donationAmount = form.donationAmount.value;
    const Notes = form.Notes.value;
    const available = form.available.value;
    const photoURL = form.photoURL.value;
    const foodQuantity = form.foodQuantity.value;


    const newRequest = {
      foodName,
      foodId,
      pickupLocation,
      expiredDate,
      foodImage,
      donorName,
      requestDate,
      donorEmail,
      userEmail,
      donationAmount,
      Notes,
      available,
      photoURL,
      foodQuantity,
    };
    console.log(newRequest);

    fetch("http://localhost:5000/requested", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Successful!',
            text: 'Requested Successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };


  const currentTime = new Date().toISOString().slice(0, 16);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/available/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFood(data);
        } else {
          console.error("Failed to fetch food data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFoodData();

    setTimeout(() => {
      const currentTimeInput = document.getElementById("currentTimeInput");
      if (currentTimeInput) {
        currentTimeInput.value = currentTime;
      }
    }, 0);
  }, [id]);

  if (!food) {
    return (
      <div className="text-2xl text-center p-40">
        <span className="loading loading-ring loading-lg text-pink-700"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-pink-700 font-bold text-center">
        Food Item: {food.foodName}
      </h1>

      <figure>
        <img
          className="w-full md:h-[500px] rounded-lg relative"
          src={food.foodImage}
          alt=""
        />
        <span className="indicator-item badge text-2xl p-4 text-white bg-pink-700 right-5 top-24 absolute">
          {food.available}
        </span>
      </figure>
      <div className="flex items-center justify-between">
        {" "}
        <p className="text-end text-xl md:text-3xl font-bold">
          Quantity:{" "}
          <span className="text-pink-700 font-bold">{food.foodQuantity}</span>
        </p>
        <p className="text-xl md:text-3xl font-bold ">
          Expired In:
          <span className="text-pink-700"> {food.expiredDate}</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl md:text-4xl font-bold">
          Donor Name: <span className=" text-pink-700">{food.displayName}</span>
        </p>
        <img
          className="w-16 md:w-20 rounded-full border-2 border-pink-700"
          src={food.photoURL}
          alt=""
        />
      </div>
      <div className="flex justify-between md:text-2xl font-bold">
        <p>
          Note: <span className="text-pink-700">{food.additionalNotes}</span>
        </p>
        <p>
          Pickup Location:{" "}
          <span className="text-pink-700">{food.pickupLocation}</span>
        </p>
      </div>
      <div className="py-6">
        <button
          className="btn w-full bg-pink-700 text-white text-xl"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Request for food!
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form onSubmit={handleRequest} className="card-body">
              <div className="flex">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    placeholder="Food Name"
                    defaultValue={food.foodName}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Food Id</span>
                  </label>
                  <input
                    type="text"
                    name="foodId"
                    placeholder="Food Id"
                    defaultValue={food._id}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="Food Name"
                    defaultValue={food.pickupLocation}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Expire Date</span>
                  </label>
                  <input
                    type="text"
                    name="expiredDate"
                    placeholder="Food Id"
                    defaultValue={food.expiredDate}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <img className="rounded-lg h-40" src={food.foodImage} alt="" />
              <div className="flex">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>

                  <input
                    type="text"
                    name="foodImage"
                    placeholder="Food Image"
                    defaultValue={food.foodImage}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Image</span>
                  </label>

                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Donor Image"
                    defaultValue={food.photoURL}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Name</span>
                  </label>
                  <input
                    type="text"
                    name="donorName"
                    placeholder="Donor Name"
                    defaultValue={food.displayName}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Request Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    id="currentTimeInput"
                    name="requestDate"
                    placeholder="Request Date"
                    defaultValue={currentTime}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Email</span>
                  </label>
                  <input
                    type="email"
                    name="donorEmail"
                    placeholder="Donor Email"
                    defaultValue={food.email}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="user@email.com"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text">Donation Amount</span>
                  </label>
                  <input
                    type="number"
                    name="donationAmount"
                    placeholder="$10"
                    defaultValue={10}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text">Food Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="foodQuantity"
                    placeholder="Food Quantity"
                    defaultValue={food.foodQuantity}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text">Available Status</span>
                  </label>
                  <input
                    type="text"
                    name="available"
                    placeholder="Is it Available"
                    defaultValue="Available"
                    className="input input-bordered"
                    required
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <input
                  type="text"
                  name="Notes"
                  placeholder="Additional Notes"
                  defaultValue={food.additionalNotes}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-pink-700 text-white text-xl"
                  type="submit"
                  value="Request"
                />
              </div>
            </form>
            <form
              method="dialog"
              className="modal-backdrop flex justify-center"
            >
              <button className="btn bg-red-500 text-white">close</button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default FoodDetails;
