import React from "react";
import atom from "./atom.png";
function Offer() {
  return (
    <div className="offer">
      <div className="offer__container">
        <div className="offer__container__heading">OFFERS BY CHEMSWOT</div>
        <div className="offer__container__block">
          <div className="left_side">
            <div className="left_side_main_heading">Monthly Plan</div>
            <div className="left_side_sub_heading">Get all at just 500</div>
            <div className="left_side_button">Buy Now</div>
          </div>

          <div className="center_side">
            <img alt="" src={atom} />
          </div>

          <div className="left_side">
            <div className="left_side_main_heading">Yearly Plan</div>
            <div className="left_side_sub_heading">Get all at just 5000</div>
            <div className="left_side_button">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
