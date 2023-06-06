import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useRestaurants } from "../hooks/useRestaurants";

const Body = () => {
  const restaurants = useRestaurants();
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
