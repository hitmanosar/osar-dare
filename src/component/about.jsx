import React from "react";
import Nav from "./nav";
import Footer from "./footer";


function About(){
    return(
       
           
            <div>
                 <Nav/>
                <div className="container">
                    <div className="ibox">
                        <img src={require('../photo/a1.jpg')} className="img img-fluid border border-danger rounded"  alt="" />
                    </div>
              <div className="container mt-5">
              <h1 className="text-center text-danger"> About DARE OR SCARE!!</h1>
            <p className="text-primary text-center">
            DARE OR SCARE!! is the premiere online destination for movie enthusiasts, providing the latest news and information on casting and development, release dates, trailers, interviews and clips, full movies and more. DARE OR SCARE!! keeps users connected to all their favorites, past, present and future. As a top social entertainment network, DARE OR SCARE!! is revolutionizing the way you discover, watch and discuss the movies you love.
            </p>
             <p className="text-primary  text-center">
             Online since 1995, DARE OR SCARE!! was one of the first movie sites to appear on the web. Covering the industry from our teams in NY, LA, and beyond, DARE OR SCARE!! continues to be one of the most trusted destinations for the connected generation.
             </p>

             <p className="text-primary text-center">
             Valnet Inc.'s team of editorial contributors obsessively covers movies, television, streaming and pop culture from locations around the globe, delivering the best coverage, news and insight to over 200MM users annually across our sites and branded platforms. Our contributors are as diverse as their locations: passionate movie and TV fans, expert analysts, students of film and television, writers, video producers and more.
             </p>
              </div>
            </div>
          <Footer/>
          </div>
        

        
    )
}

export default About;