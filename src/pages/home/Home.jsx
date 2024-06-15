import React from "react";
import Header from "../../components/header/Header";
import ShowcaseBar from "../../components/showcaseBar/ShocaseBar";
import "./home.css";
import PromotionalSlider from "../../components/promotionalSlider/PromotionalSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <ShowcaseBar />
        <PromotionalSlider />
        <div className="productCard">
          <div className="cardContainer">
            <div className="topCard">
              <h2>Best of Electronics</h2>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="centerCard">
              <div className="card">
                <div className="image">
                  <img src="./images/electronics6.webp" alt="" />
                </div>
                <div className="heading">
                  <p>Lorem, ipsum dolor.</p>
                  <h4>Shop Now</h4>
                </div>
              </div>
              <div className="add">
                <img
                  src="./images/addvertise.webp"
                  alt=""
                  style={{
                    height: "380px",
                    width: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
