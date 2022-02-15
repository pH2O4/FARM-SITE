import React from "react";
import './content.css'
import { Component } from "react";

//import react-botstrap
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//import imagens
import Campo from '../imagens/Design sem nome.jpg'
import Campo1 from '../imagens/fazendaimg1.jpg'
import Campo2 from '../imagens/fazendaimg3.jpg'

class Content extends Component {
    render() {
        return (
<Carousel className="Content">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {Campo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Trabalhando Sempre Com Qualidade</h3>
      <p>Produtos desenvolvidos com a mais alta tecnologia do mercado.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Campo1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Clientes Satisfeitos</h3>
      <p>Linha de produção cada vez mais otimizada para entregar os melhores grãos.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Campo2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Colaboradores altamente capacitados</h3>
      <p>Os treiamentos ocorrem constantemente para os mais novos.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );
    }
}
  
export default Content;