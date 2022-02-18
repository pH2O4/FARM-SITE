import React from "react";
import './Footer.css'
import { Component } from "react";

class Footer extends Component {
  render() {
      return (
        <div className="Footer">
        <div  id="Ajuste">
          <div>
        <h1>Contato</h1>
        <b>Número:</b>  76 9898-6777 <br />
        <b>Email:</b>  fazendadec@gmail.com <br />
        <b>Skype:</b>  fazenda.decisao <br />
          </div>
        </div>
        <div>
          <div id="Ajuste2">
            <div>
      <h1>Endereço</h1> 
     <b>Av. Clériston Andrade, 3707 - Mimoso, Barreiras - BA, 47803-550</b> <br />
            </div>

          </div>

        </div>
        </div>
      );
      }
  }

  export default Footer