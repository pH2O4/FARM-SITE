import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
    </Router>
