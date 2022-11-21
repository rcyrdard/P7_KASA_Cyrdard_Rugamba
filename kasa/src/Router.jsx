import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './styles/Index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'
import Apropos from './pages/Apropos'


export default function Routing() {
    
    return (
        <Router>
            <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/logements/:id" element={<FicheLogement />}/>
            <Route path="/Apropos" element={<Apropos/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
            <Footer />
        </Router>
    );

}


