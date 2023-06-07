import React, { Children, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import "./style.css";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import About from "./components/About";
import UserContext from "./contexts/userContext";
import HeadingContext from "./contexts/headingContext";
import RestaurantsContext from "./contexts/restaurantsContext";
import { Provider } from "react-redux";
import store from "./utils/store";
const Instamart = lazy(() => import("./components/Instamart"));
const rootID = document.querySelector("#root");

const App = () => {
  const [heading, setHeading] = useState("Dummy Heading");
  const [restaurants, setRestaurants] = useState(null);
  return (
    <>
      <Provider store={store}>
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
          <HeadingContext.Provider value={{ heading, setHeading }}>
            <UserContext.Provider
              value={{
                name: "Ankush",
                age: 33,
              }}
            >
              <NavBar />
            </UserContext.Provider>
            <Outlet />
          </HeadingContext.Provider>
        </RestaurantsContext.Provider>
        <Footer />
      </Provider>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Body />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
        children: [
          {
            element: <Footer />,
            path: "footer",
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(rootID);

root.render(<RouterProvider router={routes} />);
