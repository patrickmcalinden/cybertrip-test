import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import './App.css';
import SigninPage from "./pages/signin";
import RegisterPage from "./pages/register";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cybertrip-test' element={<Home />} exact/>
        <Route path='/signin' element={<SigninPage />} exact/>
        <Route path='/register' element={<RegisterPage />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
