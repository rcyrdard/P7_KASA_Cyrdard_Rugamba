import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './styles/Index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
