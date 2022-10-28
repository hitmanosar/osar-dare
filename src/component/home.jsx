
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./nav";
import Carousel from "./carousel";
import Footer from "./footer";
import Card from "./card";
import But from "./but";
import movies from "../lists";




function Home(){


   

    
    const[list,setlist] = useState([]);

    const[loads,setloads] = useState(true);

   

    function display(){
        
      return setlist(movies);
    }



  
        useEffect(()=>{
           
    
           setTimeout(() =>{
            display();
            setloads(false);
           },1000)
           
        } , [] );


        



    return(
        <div>
            <Nav/>
            <Carousel/>

             <But/>

             <h1 className="text-center text-danger font-weight-bolder mt-4">DARE OR SCARE!!!!</h1>
             
             {(loads==true) ?   <div className="container d-flex justify-content-center">
            
            <h5 class=" mt-4 text-warning text-center">Loading...</h5>
          
          </div> : loads}
          
            <div className="container mt-5 ">
            <div className="row d-flex flex-column flex-md-row flex-lg-row justify-content-center">
            {list.map((one,index)=>{
 return  <Card key={index} name={one.name} Src={one.src} director={one.director} run={one.runtime} lan={one.language} rate={one.rating}/>
})}
</div>
</div>



           
          
       <Footer/>   

        </div>
    )
}

export default Home;



