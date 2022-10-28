import React from "react";
import {Link} from 'react-router-dom';


function But(){
    return(
        <div className="container d-flex flex-row justify-content-center but mt-5">
         <Link className="als btn text-dark  nav-item active " to='/'>All</Link>
       <Link className="als btn text-dark  nav-item active " to='/movie'>Movies</Link>
        <Link className="als btn text-dark   nav-item active " to='/serie'>Series</Link>
       <Link className="als btn text-dark  nav-item active " to='/popular'>Popular</Link>
       
    </div>
    )
}


export default But;