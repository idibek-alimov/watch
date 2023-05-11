import React from "react";
import "./Brands.css";
const Brands = () => {
  return (
    <div className="brands-box">
      <div className="marquee">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
          return (
            <div key={item}>
              <img src={`brand${item}.png`} alt="brand" />
            </div>
          );
        })}
      </div>
      <div className="marquee2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
          return (
            <div key={item}>
              <img src={`brand${item}.png`} alt="brand" />
            </div>
          );
        })}
      </div>
    </div>
    // <div className="marquee-w">
    //   <div className="marquee">
    //     <div className="wrapper">
    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
    //         return (
    //           <div key={item} className="marquee-child">
    //             <img src={`brand${item}.png`} alt="brand" />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className="marquee marquee2">
    //     <div className="wrapper">
    //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
    //         return (
    //           <div key={item} className="marquee-child">
    //             <img src={`brand${item}.png`} alt="brand" />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Brands;
