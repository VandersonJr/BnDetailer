import * as S from "./footer.module.scss";
import Logo from "../../assets/logofundo.png";
import { PhoneCall, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <section className={S.contatoFooter}>
        <div className={S.cardMarca}>
          <div className={S.Marca}>
            <div className={S.logoMarca}>
              <img className={S.Logo} src={Logo} alt="Logo da BN Lava Car" />
            </div>
            <div className={S.textMarca}>
              <h1 className={S.titMarca}>BN Detailer</h1>
              <h4 className={S.pagMarca}>Estética Automotiva</h4>
              <p className={S.decMarca}>
                Transformando veículos com excelência e profissionalismo
              </p>
            </div>
          </div>
        </div>
        <div className={S.cardServicos}>
          <h1 className={S.titServicos}>Serviços</h1>
          <ul className={S.listServicos}>
            <li className={S.tipList}>Estética Externa</li>
            <li className={S.tipList}>Estética Interna</li>
            <li className={S.tipList}>Serviços Técnicos</li>
          </ul>
        </div>
        <div className={S.cardContato}>
          <h1 className={S.titContato}>Contato</h1>
          <div className={S.contTel}>
            <PhoneCall className={S.iconTel} />
            <a
              className={S.tel}
              href="https://wa.me/5512988122903?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20limpeza!"
            >
              (12) 98812-2903
            </a>
          </div>
          <div className={S.contEnd}>
            <MapPin className={S.iconMap} />
            <a
              className={S.map}
              href="https://maps.app.goo.gl/EkGDCP6mGku7GoRJ8"
              target="_blank"
            >
              Rua Andre Tozzeto, 244 - Santa Terezinha, Aparecida - SP, CEP
              12573-318.
            </a>
          </div>
        </div>
        <div className={S.cardRedes}>
          <h1 className={S.titRedes}>Redes Sociais</h1>
          <div className={S.linkRedes}>
            <a href="https://www.facebook.com/bene.elias15/">
              <Facebook className={S.iconFace} color="#ffffff" />
            </a>
            <a href="https://www.instagram.com/jr_benee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram className={S.iconInsta} color="#ffffff" />
            </a>
          </div>
        </div>
      </section>
      <section className={S.marcaFooter}>
        <p className={S.textMarcaFooter}>
          BN Detailer - Estética Automotiva. Todos os direitos reservados. CNPJ:
          64.361.487/0001-10
        </p>
      </section>
    </footer>
  );
};

export default Footer;
