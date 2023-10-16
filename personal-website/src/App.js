import React from "react"
//import logo from './logo.svg';
import './App.css';

//!Importing components
import Header from "./components/header/Header";
import NavTabs from "./components/tabs/Tabs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <NavTabs/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
