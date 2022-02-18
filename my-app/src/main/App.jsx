import React from "react";
import "./App.css"
import { BrowserRouter} from "react-router-dom";

import Home from "../componentes/Home"
import Footer from "../componentes/Footer"
import Header from "../componentes/header"
import Content from "../componentes/content"


export default props =>
    <BrowserRouter>
    <div className="App">
    <Header />
    <Content />
    <Footer />
    </div>
    </BrowserRouter>

