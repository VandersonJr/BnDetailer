import * as S from "./header.module.scss";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (window.innerWidth > 767) setMenuAberto(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      {!isMobile && (
        <section className={S.Container}>
          <section className={S.Marca}>
            <div className={S.campLogo}>
              <a href="">
                <img className={S.Logo} src={Logo} />
              </a>
            </div>
            <div className={S.campTexto}>
              <a href="" className={S.textTit}>
                BN Detailer
              </a>
              <a href="" className={S.subTit}>
                Estética Automotiva
              </a>
            </div>
          </section>
          <nav className={S.Nav}>
            <a className={S.Link} href="#servicos">
              Serviços
            </a>
            <a className={S.Link} href="#sobre">
              Sobre
            </a>
          </nav>
          <a
            className={S.btn}
            href="https://wa.me/5512988122903?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20limpeza!"
          >
            Agendar
          </a>
        </section>
      )}

      {isMobile && (
        <section className={S.Container}>
          <section className={S.Marca}>
            <div className={S.campLogo}>
              <img className={S.Logo} src={Logo} />
            </div>
            <div className={S.campTexto}>
              <h1 className={S.textTit}>BN Detailer</h1>
              <h6 className={S.subTit}>Estética Automotiva</h6>
            </div>
          </section>
          <button
            className={S.botMenu}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <Menu />
          </button>
          {isMobile && menuAberto && (
            <div className={S.navMobile}>
              <nav className={S.Nav}>
                <a
                  className={S.Link}
                  href="#servicos"
                  onClick={() => setMenuAberto(false)}
                >
                  Serviços
                </a>
                <a
                  className={S.Link}
                  href="#sobre"
                  onClick={() => setMenuAberto(false)}
                >
                  Sobre
                </a>
                <a
                  className={S.btn}
                  href="https://wa.me/5512988122903?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20limpeza!"
                  onClick={() => setMenuAberto(false)}
                >
                  Agendar
                </a>
              </nav>
            </div>
          )}
        </section>
      )}
    </header>
  );
};

export default Header;
