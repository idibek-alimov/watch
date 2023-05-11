import React, { useEffect, useState } from "react";
import "./FirstPoint.css";
const FirstPoint = () => {
  return (
    <div className="point-box">
      <div id="first"></div>
      <div className="point-title">
        ID WATCH - это интернет магазин мужских наручных часов.
      </div>
      <div className="point-text">
        Здесь вы приобретёте себе часы, которые подчеркнут ваш стиль и заставит
        делать вам комплементы. Подберите себе часы механические, электронные
        или классические с хорошей ценой и быстрой доставкой по всей России.
        Оставьте заявку и мы проконсультируем вас.
      </div>
      <button className="point-button">ОСТАВИТЬ ЗАЯВКУ</button>
    </div>
  );
};

export default FirstPoint;
