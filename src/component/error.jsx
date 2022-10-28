import React from "react";


function Error404(){
   return(
    <div className="container mt-5 text-center">
         <h1 className="text-center text-danger font-weight-bold">Error 404 Page Not Found!!!</h1>
         <img  src={require('../photo/sad.png')} width='50%' className="img img-fluid center-block" alt="" />
    </div>
   )
}


export default Error404;