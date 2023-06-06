import { useState, useEffect } from "react";
import { CLOUDINARY_IMAGE_URL } from "../constants";
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const restaurantsData = await fetch(CLOUDINARY_IMAGE_URL)
      .then((res) => res.json())
      .then((res) => res);
    setRestaurants(restaurantsData?.data?.cards[2]?.data?.data?.cards);
  };

  return restaurants;
};
