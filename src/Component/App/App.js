import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';


function App() {
  return (
    <div class="container">
      <div class="row">
      <div class="container">
      <div class="row">
        <Sanpham tieude="Sản phẩm số 1" linkanh = "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" gia="30000 đ"></Sanpham>
        <Sanpham tieude="Sản phẩm số 2" linkanh = "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" gia="35000 đ"></Sanpham>
        <Sanpham tieude="Sản phẩm số 3" linkanh = "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" gia="28000 đ"></Sanpham>
        <Sanpham tieude="Sản phẩm số 4" linkanh = "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" gia="32000 đ"></Sanpham>
        <Sanpham tieude="Sản phẩm số 5" linkanh = "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" gia="25000 đ"></Sanpham>
      </div>
   </div>
      </div>
   </div>
  )
}

export default App;
