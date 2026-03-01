import Logo from "../assets/logofundo.png";
import BN from "../assets/bn.png";
import * as S from "./home.module.scss";

const Home = () => {
  return (
    <main>
      <section className={S.contUm}>
        <div className={S.campLogo}>
          <img className={S.Logo} src={Logo} />
        </div>

        <div className={S.campText}>
          <h1 className={S.titText}>Estética Automotiva Premium</h1>
          <p className={S.pagText}>
            Cuidamos do seu veículo nos mínimos detalhes com lavagem técnica,
            higienização profunda, revitalização e vitrificação, garantindo
            brilho, proteção e acabamento premium.
          </p>
        </div>

        <div className={S.campBut}>
          <a
            className={S.btnAgendar}
            href="https://wa.me/5512988122903?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20limpeza!"
          >
            Agendar Consulta
          </a>

          <a href="#servicos" className={S.btnConhecer}>
            Conhecer nossos serviços
          </a>
        </div>
      </section>

      <section className={S.contDois} id="servicos">
        <h2 className={S.titServ}>Nossos Serviços</h2>
        <p className={S.textServ}>
          Cuidado técnico, acabamento premium e valorização do seu veículo.
        </p>
        <div className={S.cards}>
          <div className={S.cardUm}>
            <h3 className={S.titCardUm}>Estética Externa</h3>
            <ul>
              <li className={S.servCardUm}>Lavagem tradicional</li>
              <li className={S.servCardUm}>Lavagem detalhada</li>
              <li className={S.servCardUm}>Vitrificação</li>
              <li className={S.servCardUm}>Revitalização de faróis</li>
            </ul>
          </div>
          <div className={S.cardDois}>
            <h3 className={S.titCardDois}>Estética Interna</h3>
            <ul>
              <li className={S.servCardDois}>Higienização interna</li>
              <li className={S.servCardDois}>Higienização de bancos</li>
            </ul>
          </div>
          <div className={S.cardTres}>
            <h3 className={S.titCardTres}>Serviços Técnicos</h3>
            <ul>
              <li className={S.servCardTres}>Lavagem de motor</li>
              <li className={S.servCardTres}>Lavagem de chassi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={S.contTres} id="sobre">
        <h2 className={S.titSobre}>Sobre Nós</h2>

        <div className={S.campSobre}>
          <div className={S.campImg}>
            <img className={S.imgSobre} src={BN} />
          </div>

          <div className={S.textSobreCont}>
            <p className={S.textSobre}>
              Somos especialistas em estética automotiva, dedicados a
              transformar cada veículo com técnica, precisão e atenção aos
              mínimos detalhes. No BN Detailer, acreditamos que cuidar do seu
              carro vai muito além da limpeza — é valorização, proteção e
              preservação.
            </p>

            <p className={S.textSobre}>
              Trabalhamos com produtos de alta performance e métodos
              profissionais que garantem acabamento impecável, brilho duradouro
              e conservação superior. Cada serviço é executado com
              responsabilidade, cuidado e compromisso com a excelência.
            </p>

            <p className={S.textSobre}>
              Nosso objetivo é entregar mais do que um veículo limpo: entregamos
              experiência, confiança e resultado premium.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
