import React, { Children } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import "./style.css";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import { lazy, Suspense } from "react";
// const About = lazy(() => import("./components/About"));
const rootID = document.querySelector("#root");

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
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
        element: (
          // <Suspense>
          <About />
          // </Suspense>
        ),
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
    ],
  },
]);

const root = ReactDOM.createRoot(rootID);

root.render(<RouterProvider router={routes} />);
