import React from "react";
import './Footer.css'
import { Component } from "react";
import { render } from "react-dom";

class Footer extends Component {
  render() {
      return (
        <div className="Footer">
        <div id="Ajuste">
          <h1>Contato</h1>
         Número 76 9898-6777 <br />
         Email: fazendadec@gmail.com <br />
         Skype: fazenda.decisao <br />
        </div> 
        </div>
      );
      }
  }

  export default Footer