import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import '../style/nav.css';


function Nav(){
    return(
       
 <div className="container-fluid">


<nav className="navbar navbar-expand-lg" id="navbar">
<img  src={require('../photo/R.png')} className="logo1 rounded" alt="logo" width="10%"/> 
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
   aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon  "> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFA500" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span> 
</button>
<div className="collapse navbar-collapse text-center"  id="navbarNav">
   <ul className="navbar-nav mr-auto ml-lg-5">
     

   <li className="nav-item active mt-2">
       <Link className="al nav-item active" to='/'>Home</Link>
       </li>

       
       <li className="nav-item active mt-2">
       <Link className="al" to='/about'>About</Link>
       </li>

   </ul>
</div>
</nav>






</div> 
       
    )
}

export default Nav;








