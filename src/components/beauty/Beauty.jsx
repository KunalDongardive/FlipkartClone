import React from "react";
import "./beauty.css";

const Beauty = () => {
  return (
    <div className="Beauty">
      <div class="beautyOne" width="230px">
        <h1>Beauty, Food, Toys & More</h1>
        <button type="button">VIEW ALL</button>
      </div>
      <div className="beautyProducts">
        <div class="one">
          <img src="images/electronics1.webp" alt="" />
          <h4>Top Mirrorless Cameras</h4>
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics2.webp" alt="" />
          <h4>Monitors</h4>
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics3.webp" alt="" />
          <h4>Printers</h4>
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics4.webp" alt="" />
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics5.webp" alt="" />
          <h4>Monitors</h4>
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics6.webp" alt="" />
          <h4>Power Banks</h4>
          <p>Shop Now</p>
        </div>
        <div class="one">
          <img src="images/electronics7.webp" alt="" />
          <h4>Projectors</h4>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
