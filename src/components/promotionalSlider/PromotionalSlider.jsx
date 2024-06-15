import React from "react";
import "./promotionalSlider.css";

const PromotionalSlider = () => {
  return (
    <div className="PromotionalSlider">
      <div className="Promo">
        <img src="./images/landscape1.webp" alt="" width="100%" height="100%" />
      </div>
      <div className="Promo">
        <img src="images/landscape2.webp" alt="" width="100%" height="100%" />
      </div>
      <div className="Promo">
        <img src="images/landscape3.webp" alt="" width="100%" height="100%" />
      </div>
      <div className="Promo">
        <img src="images/landscape4webp" alt="" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PromotionalSlider;
