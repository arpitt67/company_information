
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './pages/about';
import Userloginpage from './pages/Userloginpage';
import Adminloginpage from './pages/Adminloginpage';
import RegisterUserpage from './pages/RegisterUserpage';
// import Features from './pages/Features';
// import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/userLogin" element={<Userloginpage />} />
          <Route path="/adminLogin" element={<Adminloginpage />} />
          <Route path="/registerUser" element={<RegisterUserpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
