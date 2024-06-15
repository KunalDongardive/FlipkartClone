import React from "react";
import "./showcaseBar.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShocaseBar = () => {
  return (
    <div className="ShowcaseBar">
      <div className="products">
        <img src="images/grocery.webp" alt="" height="64px" width="64px" />
        <p>Grocery</p>
      </div>
      <div className="products">
        <img src="images/mobile.webp" alt="" height="64px" width="64px" />
        <p>Mobiles</p>
      </div>
      <div className="products">
        <img src="images/fashion.webp" alt="" height="64px" width="64px" />
        <div className="productsBottom">
          <p>Fashion</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="products">
        <img src="images/electronics.webp" alt="" height="64px" width="64px" />
        <div className="productsBottom">
          <p>Electronics</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="products">
        <img src="images/home.webp" alt="" height="64px" width="64px" />
        <div className="productsBottom">
          <p>Home & furniture</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="products">
        <img src="images/appliances.webp" alt="" height="64px" width="64px" />
        <p>Appliances</p>
      </div>
      <div className="products">
        <img src="images/travel.webp" alt="" height="64px" width="64px" />
        <p>Travel</p>
      </div>
      <div className="products">
        <img src="images/top offer.webp" alt="" height="64px" width="64px" />
        <p>Top Offer</p>
      </div>
      <div className="products">
        <img
          src="images/beauty to toys and more.webp"
          alt=""
          height="64px"
          width="64px"
        />
        <div className="productsBottom">
          <p>Beauty, Toys & More</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="products">
        <img src="images/2-wheeler.webp" alt="" height="64px" width="64px" />
        <div className="productsBottom">
          <p>Two Wheelers</p>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default ShocaseBar;
