import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import page partials
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// import page content
import Home from "./pages/Home.js";
import Regions from "./pages/Regions.js";
import Contact from "./pages/Contact.js";
import News from "./pages/News.js";


const App = () =>{
    return (
        <Router>
            <div id="wrapper">
                <Header />  
             
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/regions" element={<Regions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                </Routes>

                <Footer />
            </div>

        </Router>
    )
};

export default App;

