import React from "react";
import { Component } from "react";
import './Home.css'

import Foooter from "../componentes/Footer"
import Header from "../componentes/header"
import Content from "../componentes/content"

class Footer extends Component {
  render() {
      return (
        <div className="Home">
        <Header />
        <Content />
        <Foooter />
        </div>

      );
      }
  }

  export default Footer