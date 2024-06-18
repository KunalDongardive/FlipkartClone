import React from "react";
import "./phones.css";

const Phones = () => {
  return (
    <div className="Phones">
      <h2 className="title">Motorola smartphones</h2>
      <div className="products">
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/p/b/v/motorola-g34-5g-original-imagh288yzhhdtzy.jpeg?q=70"
            alt="Motorola G34 5G"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">
              Motorola G34 5G (Ocean Green, 128 GB)
            </p>
            <div className="product-rating">
              <span className="rating">4.2</span>
              <span className="rating-count">(78,769)</span>
            </div>
            <div className="product-price">
              <span className="price">₹11,999</span>
              <span className="original-price">₹14,999</span>
              <span className="discount">20% off</span>
            </div>
          </div>
        </div>
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/p/f/q/motorola-g64-5g-original-imaghz63mzt8hggz.jpeg?q=70"
            alt="Motorola g64 5G"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">Motorola g64 5G (Mint Green, 128 GB)</p>
            <div className="product-rating">
              <span className="rating">4.2</span>
              <span className="rating-count">(8,858)</span>
            </div>
            <div className="product-price">
              <span className="price">₹13,999</span>
              <span className="original-price">₹17,999</span>
              <span className="discount">22% off</span>
            </div>
          </div>
        </div>
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/c/y/l/motorola-g24-power-original-imaghzs8n8gh8hhq.jpeg?q=70"
            alt="MOTOROLA g24 Power"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">
              MOTOROLA g24 Power (Glacier Blue, 128 GB)
            </p>
            <div className="product-rating">
              <span className="rating">4.2</span>
              <span className="rating-count">(10,686)</span>
            </div>
            <div className="product-price">
              <span className="price">₹7,999</span>
              <span className="original-price">₹11,999</span>
              <span className="discount">33% off</span>
            </div>
          </div>
        </div>
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/k/j/z/motorola-g04-original-imaghznk2m8uuhhh.jpeg?q=70"
            alt="MOTOROLA G04"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">MOTOROLA G04 (Concord Black, 64 GB)</p>
            <div className="product-rating">
              <span className="rating">4.2</span>
              <span className="rating-count">(11,834)</span>
            </div>
            <div className="product-price">
              <span className="price">₹6,999</span>
              <span className="original-price">₹9,999</span>
              <span className="discount">30% off</span>
            </div>
          </div>
        </div>
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/n/e/x/motorola-g14-original-imaghx7g27g6hzxg.jpeg?q=70"
            alt="Motorola g14"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">Motorola g14 (Sky Blue, 128 GB)</p>
            <div className="product-rating">
              <span className="rating">4.1</span>
              <span className="rating-count">(48,135)</span>
            </div>
            <div className="product-price">
              <span className="price">₹8,499</span>
              <span className="original-price">₹12,999</span>
              <span className="discount">34% off</span>
            </div>
          </div>
        </div>
        <div className="product">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/l4z62ow0/mobile/m/f/m/motorola-g64-5g-original-imaghznk2w4zzg2f.jpeg?q=70"
            alt="Motorola g64 5G"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-name">Motorola g64 5G (Pearl Blue, 256 GB)</p>
            <div className="product-rating">
              <span className="rating">4.1</span>
              <span className="rating-count">(5,697)</span>
            </div>
            <div className="product-price">
              <span className="price">₹15,999</span>
              <span className="original-price">₹19,999</span>
              <span className="discount">20% off</span>
            </div>
          </div>
        </div>
      </div>
      <button className="view-all-button">VIEW ALL</button>
    </div>
  );
};

export default Phones;
