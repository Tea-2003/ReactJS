import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Content from "../Component/Contents/Content";
import BTKQHT from "../BT Form/BTKQHT";
function App() {
  return (
    <div id="container">
      <Header /> 
      <BTKQHT />    
      {/* <Content />   
      <Footer /> */}
    </div>
  );
}

export default App;

