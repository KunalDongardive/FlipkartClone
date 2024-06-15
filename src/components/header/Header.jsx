import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="images/flipkart logo.png"
          alt=""
          style={{
            height: "20px",
            width: "75px",
            position: "relative",
            top: "25px",
          }}
        />
        <h5>
          Explore &nbsp;
          <span id="plus">Plus</span>&nbsp;
          <img
            src="images/plus_logo.png"
            alt=""
            style={{ height: "10px", width: "10px" }}
          />
        </h5>
      </div>
      <div className="searchbar">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search for products brands and more" />
      </div>
      <div className="menu">
        <button id="log">Login</button>
        <a href="abc">
          <FontAwesomeIcon icon={faShop} />
          &nbsp; Become a Seller
        </a>
        <a href="abc">
          {/* <FontAwesomeIcon icon={faUser} /> */}
          More&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <a href="abc">
          <FontAwesomeIcon icon={faCartShopping} />
          &nbsp; Cart
        </a>
      </div>
    </div>
  );
};

export default Header;
