import React from "react";
import Home from "./component/home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from './component/about';

import Serie from "./component/serie";
import Movie from "./component/movie";
import Popular from "./component/popular";
import Error404 from "./component/error";





function App(){
  return(
    <div>
     <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       
        <Route path="/serie" element={<Serie/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="*" element={<Error404 />} />
       
      </Routes>
    
     </Router>
    </div>
  )
}

export default App;