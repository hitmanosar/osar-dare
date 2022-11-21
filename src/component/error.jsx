import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center text-danger font-weight-bold">
        Error 404 Page Not Found!!!
      </h1>
      <img
        src={require("../photo/sad.png")}
        width="50%"
        className="img img-fluid center-block"
        alt=""
      />{" "}
      <br />
      <Link className="h2 text-danger mt-5" to="/">
        Go Back
      </Link>
    </div>
  );
}

export default Error404;
