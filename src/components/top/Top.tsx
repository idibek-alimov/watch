import React from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Top = () => {
  return (
    <div className="top-box">
      <div className="top-top">
        <GiHamburgerMenu color="white" size={30} />
        <img src="gr_logo.png" alt="gr_logo.png" />
        <div className="info-box">
          <div className="phone-number">связаться +79123120365</div>
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
      </div>
    </div>
  );
};

export default Top;
