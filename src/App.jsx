import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/not_found/NotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/plans" element={<Plans/>} />
                <Route path="/trainers" element={<Trainers/>} />
                <Route path={'*'} element={<NotFound/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
