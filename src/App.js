import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import Home from './Components/Home'
import AuthForm from './Components/AuthForm'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<AuthForm />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
