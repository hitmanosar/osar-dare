import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="col-12 col-lg-4 col-md-5 col-sm-12">
      <div
        className="card bg-warning"
        style={{ width: "auto", height: 95 + "%" }}
      >
        <img
          class="cc rounded card-img-top"
          src={props.Src}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title tt">Title : {props.name}</h5>
          <p class="card-text ">Director : {props.director}</p>
          <p class="card-text">Run Time : {props.run}</p>
          <p class="card-text">Language : {props.lan}</p>
          <p class="card-text">Rating : {props.rate} </p>
        </div>
      </div>
      <br />{" "}
    </div>
  );
}

export default Card;
