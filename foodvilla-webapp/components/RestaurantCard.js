import { IMAGE_URL } from "../constants";
const RestaurantCard = ({ cloudinaryImageId, name, avgRating }) => {
  return (
    <div className="card">
      <h1> {name} </h1>
      <img className="card-img" src={IMAGE_URL + cloudinaryImageId} />
      <h3> {avgRating} stars </h3>
    </div>
  );
};

export default RestaurantCard;
