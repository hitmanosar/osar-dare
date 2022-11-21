import React from "react";

function Carousel() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={require("../photo/hbg.jpg")}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              {/* <h1 className="text-warning p-2 font-italic rounded bg-danger font-weight-bolder ">DARE OR SCARE</h1> */}
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../photo/b2.jpg")}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              {/* <h1 className="text-warning p-2 font-italic rounded bg-danger font-weight-bolder ">DARE OR SCARE</h1> */}
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../photo/b3.jpg")}
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              {/* <h1 className="text-warning p-2 font-italic rounded bg-danger font-weight-bolder ">DARE OR SCARE</h1> */}
              <p></p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
