import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops, something went wrong.</h1>
      <h1> {error.message} </h1>
      <h1> {error.status} </h1>
      <h1>{error.statusText}</h1>
    </>
  );
};

export default Error;
