import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import {Product} from './components/Product.jsx';
import {Info} from './components/Information.jsx';
import {About} from './components/About.jsx';
import {Help} from './components/Help.jsx';
import {Login} from './components/Login.jsx';

export default function Main(){
  return(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/information" element={<Info/>} />
    <Route path="/about-us" element={<About/>} />
    <Route path="/help" element={<Help/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
  )
}