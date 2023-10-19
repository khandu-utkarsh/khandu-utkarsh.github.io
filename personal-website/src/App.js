import React from "react"
import CssBaseline from '@mui/material/CssBaseline';

//!Importing components
import Header from "./components/header/Header";
import NavTabs from "./components/tabs/Tabs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <NavTabs/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
