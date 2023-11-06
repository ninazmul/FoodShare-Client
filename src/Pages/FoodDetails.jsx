import { useParams } from "react-router-dom";


const FoodDetails = () => {

    const {
      _id,
      foodImage,
      foodName,
      foodQuantity,
      displayName,
      photoURL,
      pickupLocation,
      expiredDate,
      additionalNotes,
    } = useParams();

    return (
      <div>
        <h1 className="text-5xl text-pink-700 font-bold text-center">
         Food Item: {foodName}
            </h1>
            <img src={foodImage} alt="" />
      </div>
    );
};

export default FoodDetails;