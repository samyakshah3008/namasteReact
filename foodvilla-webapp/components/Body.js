import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../hooks/useRestaurants";
import { useContext } from "react";
import RestaurantsContext from "../contexts/restaurantsContext";

const Body = () => {
  const { restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <div className="cards-container">
        {!restaurants ? (
          <>
            <Shimmer />
          </>
        ) : (
          restaurants?.map((card) => {
            return <RestaurantCard key={card.data.id} {...card.data} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
