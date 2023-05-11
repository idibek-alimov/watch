import React from "react";
import "./End.css";
const End = () => {
  return (
    <div className="end-box">
      <div className="v1">
        <div className="v1div">
          <img src="logomini.svg" />
        </div>
        <div className="v1div">
          <span>Tel:</span>
          <span>+7 912 312 03 65</span>
          <div className="chats">
            <div className="icon-box">
              <img src="vk.png" alt="vk.png" className="icons" />
            </div>
            <div className="icon-box">
              <img src="telegram.png" alt="vk.png" className="icons" />
            </div>
            <div className="icon-box">
              <img src="whatsupp.png" alt="vk.png" className="icons" />
            </div>
            <div className="icon-box">
              <img src="instagram.png" alt="vk.png" className="icons" />
            </div>
          </div>
        </div>
        <div className="v1div">
          <span>Address:</span>
          <span>Russia, Moscow,</span>
          <span>Aviamotornaya 8, MTUCI</span>
        </div>
        <div className="v1div">
          <span>Email:</span>
          <span>jovidrahmatulloev0001@gmail.com</span>
        </div>
      </div>
      <div className="v2">Moscow 2023</div>
      <div className="v3">
        <span>Created by Idibek</span>
        <span>Designed by Jovid</span>
      </div>
    </div>
  );
};
export default End;
