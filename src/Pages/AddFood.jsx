import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const [available, setAvailable] = useState("Available");

  const toggleAvailable = () => {
    setAvailable((prevAvailable) =>
      prevAvailable === "Available" ? "Delivered" : "Available"
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const foodImage = form.foodImage.value;
    const photoURL = form.photoURL.value;
    const requestDate = form.requestDate.value;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const donationAmount = form.donationAmount.value;
    const additionalNotes = form.additionalNotes.value;

    const addNew = {
      foodName,
      pickupLocation,
      expiredDate,
      foodImage,
      displayName,
      requestDate,
      email,
      donationAmount,
      additionalNotes,
      foodQuantity,
      photoURL,
      available,
    };
    console.log(addNew);

    fetch("https://food-share-server-pink.vercel.app/available", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNew),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-5xl text-pink-700 font-bold text-center">
          Add New Food
        </h1>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  md:w-full shadow-2xl glass">
            <form onSubmit={handleAdd} className="card-body">
              <div className="md:flex">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    placeholder="Food Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Food Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="foodQuantity"
                    placeholder="Food Quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="Pickup Location"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>
                  <input
                    type="text"
                    name="foodImage"
                    placeholder="Food Image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Donor Image</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Donor Image"
                    defaultValue={user?.photoURL}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Request Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="requestDate"
                    placeholder="Request Date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Expire Date</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="expiredDate"
                    placeholder="Food Id"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Name</span>
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    placeholder="donor@email.com"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="user@email.com"
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="md:flex items-center">
                <div className="form-control">
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Status</span>
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`btn ${
                        available === "Available"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={toggleAvailable}
                    >
                      Available
                    </button>
                    <button
                      type="button"
                      className={`btn ${
                        available === "Delivered"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={toggleAvailable}
                    >
                      Delivered
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <input
                  type="text"
                  name="additionalNotes"
                  placeholder="Additional Notes"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-pink-700 text-white text-xl"
                  type="submit"
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
