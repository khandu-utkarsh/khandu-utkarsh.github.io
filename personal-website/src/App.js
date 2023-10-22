import React from "react"
import CssBaseline from '@mui/material/CssBaseline';

//!Importing components
import Header from "./components/header/Header";
import NavTabs from "./components/tabs/Tabs";
import Footer from "./components/footer/Footer";
import { Container } from "@mui/material";

const footerContainer = {
  position: 'relative',
  minHeight: '100vh',
  paddingBottom: '5%', // Adjust this value to match your footer height
}

function App() {
  return (
    <React.Fragment>

       <CssBaseline />

        <Container component={'span'} style={footerContainer}>
        <Header/>
        <NavTabs/>
        <Footer/>
        </Container>

    </React.Fragment>
  );
}

export default App;
