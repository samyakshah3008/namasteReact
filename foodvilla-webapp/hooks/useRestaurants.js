import { useState, useEffect, useContext } from "react";
import { CLOUDINARY_IMAGE_URL } from "../constants";
import RestaurantsContext from "../contexts/restaurantsContext";

const useRestaurants = () => {
  const { setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const restaurantsData = await fetch(CLOUDINARY_IMAGE_URL)
      .then((res) => res.json())
      .then((res) => res);
    setRestaurants(restaurantsData?.data?.cards[2]?.data?.data?.cards);
  };

  // return restaurantsData;
};

export default useRestaurants;
