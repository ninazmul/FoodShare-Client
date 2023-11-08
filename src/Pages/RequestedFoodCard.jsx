import Swal from "sweetalert2";

const RequestedFoodCard = ({ request }) => {
  const {
    foodImage,
    foodName,
    foodQuantity,
    donorName,
    photoURL,
    pickupLocation,
    expiredDate,
    additionalNotes,
    available,
  } = request;

  const handleCancelRequest = async () => {
    if (available === "Available") {
      try {
        const response = await fetch(
          `https://food-share-server-pink.vercel.app/requested/${request._id}`,
          {
            method: "DELETE",
          }
        );

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Request Canceled",
            text: "Your request has been canceled successfully.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Request Cancelation Failed",
            text: "An error occurred while canceling the request.",
          });
        }
      } catch (error) {
        console.error("Error canceling request:", error);
        Swal.fire({
          icon: "error",
          title: "Request Cancelation Failed",
          text: "An error occurred while canceling the request.",
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Request Cannot Be Canceled",
        text: "This request cannot be canceled because it is already delivered.",
      });
    }
  };
  return (
    <div>
      <div className="card h-[500px] glass">
        <figure>
          <img className="w-full relative" src={foodImage} alt="car!" />
          <span className="indicator-item badge text-white bg-pink-700 right-0 top-0 absolute">
            {available}
          </span>
        </figure>
        <div className="indicator"></div>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-2xl text-pink-700">{foodName}</h2>
            <p className="text-end">
              Quantity:{" "}
              <span className="text-pink-700 font-bold">{foodQuantity}</span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">{donorName}</p>
            <img
              className="w-10 rounded-full border-2 border-pink-700"
              src={photoURL}
              alt=""
            />
          </div>
          <p>{additionalNotes}</p>
          <p>Pickup Location: {pickupLocation}</p>
          <p>Expired In: {expiredDate}</p>

          <p></p>
          <div className="card-actions justify-end">
            <button
              onClick={handleCancelRequest}
              className="btn bg-pink-700 text-white w-full"
            >
              Cancel Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedFoodCard;
