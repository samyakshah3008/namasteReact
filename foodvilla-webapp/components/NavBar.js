import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../hooks/useStatus";
import useRestaurants from "../hooks/useRestaurants";
import UserContext from "../contexts/userContext";
import HeadingContext from "../contexts/headingContext";
import RestaurantsContext from "../contexts/restaurantsContext";

const NavBar = () => {
  const [auth, setAuth] = useState(true);
  const [userInput, setUserInput] = useState("");
  const user = useContext(UserContext);
  const isStatusOnline = useStatus();
  const restaurants = useRestaurants();
  const { setRestaurants } = useContext(RestaurantsContext);
  const { heading, setHeading } = useContext(HeadingContext);

  const filterRestaurant = (searchedItem) => {
    const filteredRestaurants = restaurants?.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchedItem.toLowerCase())
    );
    console.log(filteredRestaurants);
    return filteredRestaurants;
  };
  const authHandler = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };
  const searchBtnHandler = () => {
    const updatedRestaurantList = filterRestaurant(userInput);
    console.log(updatedRestaurantList);
    setRestaurants(updatedRestaurantList);
  };
  const searchBarInputHandler = (e) => {
    setUserInput(e.target.value);
    setHeading(e.target.value);
  };

  return (
    <>
      <div>NavBar</div>
      <div> {user.name} </div>
      <div> {heading} </div>
      <h1>{isStatusOnline ? "✅" : "🔴"}</h1>
      <Link to="/about">About</Link>
      <button onClick={authHandler}> {auth ? "Login" : "Logout"} </button>
      <Link to="/">HOME</Link>
      <Link to="/instamart">Instamart</Link>
      <div>
        <input onChange={searchBarInputHandler} className="search-input" />
        <button onClick={searchBtnHandler}>Search Food</button>
      </div>
    </>
  );
};

export default NavBar;
