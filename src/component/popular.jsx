import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./nav";
import Carousel from "./carousel";
import Footer from "./footer";
import Card from "./card";
import But from "./but";
import movies from "../lists";
import Loading from "./loading";

function Popular() {
  const [list, setlist] = useState([]);
  const [loads, setloads] = useState(true);

  function display() {
    return setlist(movies);
  }

  useEffect(() => {
    setTimeout(() => {
      display();
      setloads(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Nav />
      <Carousel />
      <But />
      <h1 className="text-center text-danger mt-3">Popular</h1>

      {loads == true ? <Loading /> : loads}

      <div className="container mt-5 ">
        <div className="row d-flex flex-column flex-md-row flex-lg-row justify-content-center">
          {list
            .filter((two) => {
              return two.popular == "true";
            })
            .map((three, index) => {
              return (
                <Card
                  key={index}
                  name={three.name}
                  Src={three.src}
                  director={three.director}
                  run={three.runtime}
                  lan={three.language}
                  rate={three.rating}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Popular;
