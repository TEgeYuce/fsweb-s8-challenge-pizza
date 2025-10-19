/*
import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/form");
  };

  return (
    <div>
      <button className="dugme dugme-sari" onClick={handleClick}>
        ACIKTIM
      </button>

      <button className="dugme dugme-beyaz dugme-kucuk" onClick={handleClick}>
        SİPARİŞ VER
      </button>

      <button className="dugme dugme-beyaz dugme-kucuk" onClick={handleClick}>
        SİPARİŞ VER
      </button>

      <button className="dugme dugme-beyaz dugme-kucuk" onClick={handleClick}>
        SİPARİŞ VER
      </button>
    </div>
  );
}
*/

import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const goToForm = () => history.push("/form");

  return (
    <div>
      <header className="ust-alan">
        <div className="icerik-govde">
          <div className="kimlik">
            <img className="logo-yazi" src="images/iteration-1-images/logo.svg" alt="Logo" />
          </div>

          <div className="pizza-sahne" aria-hidden="true">
            <div className="slogan-kutu">
              <p className="ince-not">fırsatı kaçırma</p>
              <h1 className="buyuk-baslik">
                KOD ACIKTIRIR <br /> PIZZA, DOYURUR
              </h1>
              <button className="dugme dugme-sari" onClick={goToForm}>
                ACIKTIM
              </button>
            </div>
            <img src="images/iteration-1-images/home-banner.png" alt="Banner" />
          </div>
        </div>
      </header>

      {/* kampanyalar */}
      <section className="kampanya-alani">
        <div className="icerik-govde promos-desen">
          <article className="kampanya-kutu kirmizi-buyuk">
            <div className="kampanya-icerik">
              <h2 className="kampanya-baslik">Özel<br/>Lezzetus</h2>
              <p className="kampanya-alt">Position:Absolute Acı Burger</p>
              <button className="dugme dugme-beyaz dugme-kucuk" onClick={goToForm}>
                SİPARİŞ VER
              </button>
            </div>
            <img src="images/iteration-2-images/cta/kart-1.png" className="kampanya-resim" alt="Kampanya" />
          </article>

          {/* diğer kampanyalar */}
        </div>
      </section>

      {/* footer */}
    </div>
  );
}