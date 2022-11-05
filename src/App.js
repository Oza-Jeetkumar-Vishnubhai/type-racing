import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import Home from './Components/Home'
import Winner from "./Components/Winner";
import Looser from "./Components/Looser";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/winner/:id" element={<Winner/>} />
          <Route path="/looser/:id" element={<Looser/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
