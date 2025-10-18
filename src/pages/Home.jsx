import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Pizza Sipariş Sistemi</h1>
      </header>

      <main>
        <section className="hero">
          <h2>Aç mısın?</h2>
          <Link to="/form" className="btn-aciktim">
            AÇIKTIM
          </Link>
        </section>

        <section className="menu">
          <h2>Menüler</h2>
          <div className="menu-items">
            <div className="menu-card">
              <h3>Karışık Pizza</h3>
              <p>Bol malzeme, tam lezzet!</p>
              <Link to="/form" className="btn-siparis">
                SİPARİŞ VER
              </Link>
            </div>

            <div className="menu-card">
              <h3>Vejetaryen Pizza</h3>
              <p>Sağlıklı ve hafif bir seçim.</p>
              <Link to="/form" className="btn-siparis">
                SİPARİŞ VER
              </Link>
            </div>

            <div className="menu-card">
              <h3>Acılı Pizza</h3>
              <p>Lezzetin ateşli hali!</p>
              <Link to="/form" className="btn-siparis">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}