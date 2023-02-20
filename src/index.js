import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./index.css"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import Error from './pages/Error/Error'
import About from './pages/About/About'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Router>
      <Header/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/logement/:id" element={<Fiche />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer/>
    </Router>


);
