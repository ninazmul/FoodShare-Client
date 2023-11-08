import { Link } from "react-router-dom";



const ManageRow = ({ manage, handleDelete }) => {
  const {
    foodImage,
    foodName,
    available,
    expiredDate,
    foodQuantity,
    pickupLocation,
    additionalNotes,
    _id,
  } = manage;

  return (
    <div>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={manage.foodImage}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{manage.foodName}</div>
              <div className="text-sm opacity-50">{manage.pickupLocation}</div>
            </div>
          </div>
        </td>
        <td>
          {manage.additionalNotes}
          <br />
          <span className="badge bg-pink-700 text-white badge-sm">
            {manage.available}
          </span>
        </td>
        <div className="flex flex-col md:flex-row">
          <td>Quantity: {manage.foodQuantity}</td>
          <th>
            <Link
              to={`/manage/${_id}`}
              className="btn bg-pink-700 text-white btn-xs"
            >
              Update
            </Link>
          </th>
        </div>
      </tr>
    </div>
  );
};

export default ManageRow;