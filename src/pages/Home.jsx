import { useHistory } from "react-router-dom";

function Home() {
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

          <nav className="kategori-serit" aria-label="Kategoriler">
            <button className="kategori-kutu">
              <img src="images/iteration-2-images/icons/1.svg" alt="" /> YENİ! Kore
            </button>
            <button className="kategori-kutu aktif">
              <img src="images/iteration-2-images/icons/2.svg" alt="" /> Pizza
            </button>
            <button className="kategori-kutu">
              <img src="images/iteration-2-images/icons/3.svg" alt="" /> Burger
            </button>
            <button className="kategori-kutu">
              <img src="images/iteration-2-images/icons/4.svg" alt="" /> Kızartmalar
            </button>
            <button className="kategori-kutu">
              <img src="images/iteration-2-images/icons/5.svg" alt="" /> Fast food
            </button>
            <button className="kategori-kutu">
              <img src="images/iteration-2-images/icons/6.svg" alt="" /> Gazlı İçecek
            </button>
          </nav>
        </div>
      </header>

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

          <article className="kampanya-kutu koyu-kutu">
            <div className="kampanya-icerik">
              <h3 className="kucuk-baslik">Hackathlon Burger Menü</h3>
              <button className="dugme dugme-beyaz dugme-kucuk" onClick={goToForm}>
                SİPARİŞ VER
              </button>
            </div>
            <img src="images/iteration-2-images/cta/kart-2.png" className="kampanya-resim" alt="Kampanya" />
          </article>

          <article className="kampanya-kutu bej-kutu">
            <div className="kampanya-icerik">
              <h3 className="kucuk-baslik"><span className="uzatma">Çoooook</span> hızlı<br/> npm gibi kurye</h3>
              <button className="dugme dugme-beyaz dugme-kucuk" onClick={goToForm}>
                SİPARİŞ VER
              </button>
            </div>
            <img src="images/iteration-2-images/cta/kart-3.png" className="kampanya-resim" alt="Kampanya" />
          </article>
        </div>
      </section>

      <section className="menu-alani">
        <div className="icerik-govde">
          <p className="el-yazisi">en çok paketlenen menüler</p>
          <h2 className="orta-baslik">Acıktıran Kodlara Doyuran Lezzetler</h2>

          <div className="filtre-satiri">
            <button className="filtre-kapsul"><img src="images/iteration-2-images/icons/1.svg" alt="" /> Ramen</button>
            <button className="filtre-kapsul aktif"><img src="images/iteration-2-images/icons/2.svg" alt="" /> Pizza</button>
            <button className="filtre-kapsul"><img src="images/iteration-2-images/icons/3.svg" alt="" /> Burger</button>
            <button className="filtre-kapsul"><img src="images/iteration-2-images/icons/4.svg" alt="" /> French fries</button>
            <button className="filtre-kapsul"><img src="images/iteration-2-images/icons/5.svg" alt="" /> Fast food</button>
            <button className="filtre-kapsul"><img src="images/iteration-2-images/icons/6.svg" alt="" /> Soft drinks</button>
          </div>

          <div className="urun-katalogu">
            <article className="urun-kart">
              <img src="images/iteration-2-images/pictures/food-1.png" className="urun-resim" alt="Terminal Pizza" />
              <h3 className="urun-baslik">Terminal Pizza</h3>
              <div className="urun-alt">
                <span className="puan">4.9</span>
                <span className="adet">(200)</span>
                <strong className="fiyat">60₺</strong>
              </div>
            </article>

            <article className="urun-kart">
              <img src="images/iteration-2-images/pictures/food-2.png" className="urun-resim" alt="Position Absolute Acı Pizza" />
              <h3 className="urun-baslik">Position Absolute Acı Pizza</h3>
              <div className="urun-alt">
                <span className="puan">4.9</span>
                <span className="adet">(200)</span>
                <strong className="fiyat">60₺</strong>
              </div>
            </article>

            <article className="urun-kart">
              <img src="images/iteration-2-images/pictures/food-3.png" className="urun-resim" alt="useEffect Tavuklu Burger" />
              <h3 className="urun-baslik">useEffect Tavuklu Burger</h3>
              <div className="urun-alt">
                <span className="puan">4.9</span>
                <span className="adet">(200)</span>
                <strong className="fiyat">60₺</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="alt-bolum">
        <div className="icerik-govde alt-izgara">
          <div className="alt-kimlik">
            <img className="logo-yazi buyuk-logo" src="images/iteration-2-images/footer/logo-footer.svg" alt="Logo" />
            <ul className="iletisim-liste">
              <li><img src="images/iteration-2-images/footer/icons/icon-1.png" alt="" /> 341 Londonderry Road,<br/> İstanbul Türkiye</li>
              <li><img src="images/iteration-2-images/footer/icons/icon-2.png" alt="" /> <a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a></li>
              <li><img src="images/iteration-2-images/footer/icons/icon-3.png" alt="" /> <a href="tel:+902161234567">+90 216 123 45 67</a></li>
            </ul>
          </div>

          <div className="alt-menu">
            <h4 className="alt-baslik">Hot Menu</h4>
            <ul className="mini-menu">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>

          <div className="alt-ig">
            <h4 className="alt-baslik">Instagram</h4>
            <div className="ig-izgara">
              <img src="images/iteration-2-images/footer/insta/li-0.png" alt="Instagram" />
              <img src="images/iteration-2-images/footer/insta/li-1.png" alt="Instagram" />
              <img src="images/iteration-2-images/footer/insta/li-2.png" alt="Instagram" />
              <img src="images/iteration-2-images/footer/insta/li-3.png" alt="Instagram" />
              <img src="images/iteration-2-images/footer/insta/li-4.png" alt="Instagram" />
              <img src="images/iteration-2-images/footer/insta/li-5.png" alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="icerik-govde alt-cubuk">
          <small>© 2023 Teknolojik Yemekler.</small>
          <img src="images/iteration-2-images/footer/icons/icon-4.PNG" className="tiny-ikon" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Home;