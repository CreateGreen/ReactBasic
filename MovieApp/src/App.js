import Movie from "./components/Movie.js";
import {useState, useEffect} from "react";
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

const App=()=>{
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />}/>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
}

export default App;
