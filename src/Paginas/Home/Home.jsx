import React from 'react';
import Carrossel from "../../components/Carrosel/carrossel";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default () => {
    return (
        <>
            <NavBar />

        <div className="container home mw-100">
            <br></br>
                
            <div className="card home container title"><h1>CAMPINGTOUR SEMPRE PRONTOS PRA NOVAS AVENTURAS</h1></div> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p><h3 className="card home container">
                    O que você vai fazer nas próximas férias?
                   <br></br>
                    Tá afim de ter uma experiência incrível, e sair da mesmice?
                    <br></br>
                    Nós te trazemos a experiência humano-natureza,
                    fornecemos o suporte básico para passarmos algumas noites sob' a luz do luar...
                    <br></br>
                    Veja as experiências de alguns amigos que se hospedaram conosco <a href="http://localhost:3000/Experiencias">Clique Aqui</a> 
                
                 </h3></p>
            <br></br>
            <br></br>
        </div>
        <Carrossel />
    <Footer />
        </>
    );
}
