import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Restaurant Id: {id}</h1>
      <div>Namaste Restuarant</div>
    </div>
  );
};

export default RestaurantMenu;
