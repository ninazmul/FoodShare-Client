
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddFood = () => {


    const { user } = useContext(AuthContext);

    
const handleAdd = (e) => {
  e.preventDefault();
  const form = e.target;
  const foodName = form.foodName.value;
  const foodQuantity = form.foodQuantity.value;
  const pickupLocation = form.pickupLocation.value;
  const expireDate = form.expireDate.value;
  const foodImage = form.foodImage.value;
  const photoURL = form.photoURL.value;
  const requestDate = form.requestDate.value;
  const donorName = form.displayName.value;
  const email = form.email.value;
  const donationAmount = form.donationAmount.value;
  const Notes = form.Notes.value;
  const available = form.available.value;

  const addNew = {
    foodName,
    pickupLocation,
    expireDate,
    foodImage,
    donorName,
    requestDate,
    email,
    donationAmount,
    Notes,
    foodQuantity,
    photoURL,
    available 
  };
  console.log(addNew);

  fetch("http://localhost:5000/available", {
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
          text: "Requested Successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
};

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full shadow-2xl glass">
          <form onSubmit={handleAdd} className="card-body">
            <div className="flex">
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
              <div className="form-control w-1/2">
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
            <div className="flex">
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
            <div className="flex">
              <div className="form-control w-1/2">
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
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  type="datetime-local"
                  name="expireDate"
                  placeholder="Food Id"
                  className="input input-bordered"
                  required
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
                  name="displayName"
                  placeholder="donor@email.com"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
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
            <div className="flex items-center">
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
                <input
                  type="text"
                  name="available"
                                  placeholder="Is it Available"
                                  defaultValue="Available"
                                  className="input input-bordered"
                                  required
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
  );
};

export default AddFood;
