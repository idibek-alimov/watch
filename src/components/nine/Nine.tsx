import React from "react";
import "./Nine.css";
const Nine = () => {
  return (
    <div className="nine-box">
      <div className="nine-text">
        Оставьте заявку, и мы ответим вам в течении 15 минут!
      </div>
      <div className="name-number-box">
        <div className="name-box">
          <span>Имя</span>
          <input />
        </div>
        <div className="number-box">
          <span>Номер телефона</span>
          <input />
        </div>
      </div>
      <div className="comment-box">
        <span>Комментарий</span>
        <textarea />
      </div>
      <div></div>
    </div>
  );
};

export default Nine;
