//import React from "react";
//import CardImg from "reactstrap";
import Footer from "../components/Footer";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";
import NavButonlar from "../components/NavButonlar";
import HomePageCard from "../components/HomePageCard";
import BottomCard from "../components/BottomCard";

const HomePage = () => {

  const history = useHistory();
  function siparisLink() {
    history.push("/OrderPage");
  }

  return (
    <>
      <div className="homeBackground">
        <div className="homePageContainer">
          <img src="\images\iteration-1-images\logo.svg" alt="ty logo" />
          <span className="sariYazi">fırsatı kaçırma</span>
          <p className="homePageYazi">KOD ACIKTIRIR PIZZA, DOYURUR</p>

          <a href="/OrderPage" className="aciktimButon">
            ACIKTIM
          </a>
        </div>
      </div>
      <section className="navbtns"
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/1.svg"}
          text={"YENİ! Kore"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/2.svg"}
          text={"Pizza"}
        />
        <NavButonlar siparisLink={siparisLink}
          
          src={"../images/iteration-2-images/icons/3.svg"}
          text={"Burger"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/4.svg"}
          text={"Kızartmalar"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/5.svg"}
          text={"Fast food"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/6.svg"}
          text={"Gazlı İçecek"}
        />
      </section>
      <section className="anaCardsContainer">
        <Card
          style={{
            backgroundImage: `url('../images/iteration-2-images/cta/kart-1.png')`,
            width: "550px",
            height: "500px",
            backgroundSize: "cover",
            borderRadius: "12px",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <CardBody>
            <CardTitle
              style={{
                fontFamily: "Quattrocento",
                maxWidth: "250px",
                fontWeight: "bold",
                fontSize: "3rem",
                color: "white",
              }}
            >
              Özel Lezzetus
            </CardTitle>
            <CardText style={{ color: "white" }}>
              <b>Position: Absolute Acı Burger</b>
            </CardText>
            <button   onClick={siparisLink} data-cy="homeSiparis" className="cardSiparisVerBtn">SİPARİŞ VER</button>{" "}
          </CardBody>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <HomePageCard siparisLink={siparisLink}
          
            src={"../images/iteration-2-images/cta/kart-2.png"}
            yazi={"Hackathlon Burger Menü"}
            color1={"white"}
          />
          <HomePageCard siparisLink={siparisLink}
            src={"../images/iteration-2-images/cta/kart-3.png"}
            extra={"Çoooook"}
            yazi={" hızlı npm gibi kurye"}
            color1={"black"}
          />
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "2rem",
          backgroundColor: "#FAF7F2",
        }}
      >
        <span
          style={{ fontFamily: "Satisfy", color: "#CE2829", fontSize: "2rem" }}
        >
          en çopk paketlenen menüler
        </span>
        <h1 style={{fontWeight:"600"}}>Acıktıran Kodlara Doyuran Lezzetler</h1>
      </section>


      <section className="navbtns"
        style={{
          padding: "1rem",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "row",
          background: "#FAF7F2",
          justifyContent: "center",
          gap: "1rem",
        }}
      > 
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/1.svg"}
          text={"Ramen"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/2.svg"}
          text={"Pizza"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/3.svg"}
          text={"Burger"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/4.svg"}
          text={"French fries"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/5.svg"}
          text={"Fast food"}
        />
        <NavButonlar siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/6.svg"}
          text={"Soft drinks"}
        />
      </section>


      <section className="altCards"
        style={{
          padding: "1rem",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          background: "#FAF7F2",
          justifyContent: "center",
          gap: "1.8rem",
        }}
      >
        <BottomCard
          src={"../images/iteration-2-images/pictures/food-1.png"}
          text={"Terminal Pizza"}
        />

        <BottomCard
          src={"../images/iteration-2-images/pictures/food-2.png"}
          text={"Position Absolute Acı Pizza"}
        />

        <BottomCard
          src={"../images/iteration-2-images/pictures/food-3.png"}
          text={"useEffect Tavuklu Burger"}
        />
      </section>


      <Footer />
    </>
  );
};

export default HomePage;