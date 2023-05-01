import React from "react";
import "./Brands.css";
const Brands = () => {
  return (
    <div className="brands-box">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
        return (
          <div key={item}>
            <img src={`brand${item}.png`} alt="brand" />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
