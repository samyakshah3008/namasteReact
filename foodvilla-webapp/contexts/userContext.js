import { createContext } from "react";

const userObj = {
  name: "Dummy name",
  age: "Dummy age",
};
const UserContext = createContext(userObj);
export default UserContext;
