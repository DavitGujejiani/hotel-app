import React from 'react';
import ContactPage from "./modules/contact/ContactPage";
import Header from "./Components/General/Header";
import Slider from "./Components/General/slider/Slider";
import Home from "./Components/modules/About/Home";
import {Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <>
            <Header/>
            {/*<Slider/>*/}

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </>
    );
}

export default App;