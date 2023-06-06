import { useState } from "react";

const useStatus = () => {
  const [isStatusOnline, setIsStatusOnline] = useState(true);

  window.addEventListener("online", () => {
    setIsStatusOnline(true);
  });

  window.addEventListener("offline", () => {
    setIsStatusOnline(false);
  });

  return isStatusOnline;
};

export default useStatus;
