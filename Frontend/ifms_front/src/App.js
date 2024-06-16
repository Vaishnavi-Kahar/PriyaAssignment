
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddPlan from './Plans/AddPlan';
import ModifyPlan from './Plans/ModifyPlan';
import DeletePlan from './Plans/DeletePlan';
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import Contact from './components/Contact';
import About from './components/About';
import More from './components/More';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/add-plan" element={<AddPlan />} />
        <Route path="/modify-plan" element={<ModifyPlan />} />
        <Route path="/delete-plan" element={<DeletePlan />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;
