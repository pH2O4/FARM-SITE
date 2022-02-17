import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../componentes/Home"
import Footer from "../componentes/Footer"
import Header from "../componentes/header"
import Content from "../componentes/content"


export default props =>
    <Router>
    <div className="App">
    <Header />
    <Content />
    <Footer />
    </div>
     <Routes>
        <Route path="/" exact component={Home}/>
    </Routes>
    </Router>
