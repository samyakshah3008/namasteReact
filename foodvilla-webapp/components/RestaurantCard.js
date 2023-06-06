import { useContext } from "react";
import { IMAGE_URL } from "../constants";
import HeadingContext from "../contexts/headingContext";
const RestaurantCard = ({ cloudinaryImageId, name, avgRating }) => {
  const { heading } = useContext(HeadingContext);
  return (
    <div className="card">
      <h1> {name} </h1>
      <img className="card-img" src={IMAGE_URL + cloudinaryImageId} />
      <h3> {avgRating} stars </h3>
      <h3> {heading} </h3>
    </div>
  );
};

export default RestaurantCard;
