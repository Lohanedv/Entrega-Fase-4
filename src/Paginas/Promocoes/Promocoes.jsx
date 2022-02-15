import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Promocoes.css";

export default () => {
  return (
    <>

      <NavBar />
      <div className="container Promo mw-100 mh-100">
      <h1 class="Promo">Promoções</h1>
        <br></br>
        <div class="row row-cols-5 row-cols-md-3 g-4">
          <div class="col">
            <div class="cardUm">
              <img class="img-top" />
              <div class="card-body">
                <br></br>
                <h5 class="card-title">Pôr do Sol nas Maldivas</h5>
                <br></br>
                <p class="card-text">Venha desfrutar dessa incível experiência nas Maldivas do Grajaú, pacote com uma barraca e todo o kit camping + locomoção e guia, por apenas 250,00 R$ á vista.
                <br></br>
                <br></br>
                Alimentação não inclusa. 
                <br></br>
                <br></br>
                <br></br>
                Consulte a <a href="http://localhost:3000/Contato" > disponibilidade</a>
                <br></br>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="cardDois">
              <img class="img-top"/>
              <div class="card-body">
                <br></br>
                <h5 class="card-title">Morro de Carapicuiba</h5>
                <br></br>
                <p class="card-text">Esse fenômeno Paulista fica escondido após uma trilha de 2 horas na capital, e somente nesse mês de março, á diária em grupo está por 80,00R$ Sábado ou Domingo, á diária inclui aluguel da barraca, guia e locomoção.
                <br></br>
                <br></br>
                Alimentação não inclusa.
                <br></br>
                <br></br>
                Solicite o calendário de datas disponíveis <a href="http://localhost:3000/Contato" > aqui</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="cardTres">
              <img class="img-top"/>
              <div class="card-body">
                <br></br>
                <h5 class="card-title">Campos de Holambra</h5>
                <br></br>
                <p class="card-text">Essa incrível experiência ocorre apenas 3 vezes ao ano, além de apreciar esse campo de rosas curandeiras, você ainda assiste á queda das estrelas cadentes, o final de semana inclui alugeul da barraca, guia turistico, locomoção e alimentação. Tudo isso por apenas 380,00 R$.
                <br></br>
                Passeio com quantidade de vagas limitada.
                <br></br>
                Verifique a disponibilidade entrando em contato com a <a href="http://localhost:3000/Contato" > Agencia</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="cardQuatro">
              <img class="img-top"/>
              <div class="card-body">
                <br></br>
                <h5 class="card-title">Floresta do Sol Vermelho</h5>
                <br></br>
                <p class="card-text">Passeio de 3 dias passamos pela ponte do sol e faremos um piquenique na gruta cheia, no pacote inclui guia diuno, noite da fogueira, barraca e locomoção, tudo isso por 400,00 R$.</p>
              <br></br>
              <br></br>
              Consulte a <a href="http://localhost:3000/Contato" > disponibilidade </a>
              </div>
            </div>
          </div>
        <br></br>
        <br></br>
        </div>
      </div>
      <Footer />
    </>
  );
}