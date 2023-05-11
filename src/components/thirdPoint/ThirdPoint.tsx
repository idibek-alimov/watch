import React from "react";
import "./ThirdPoint.css";
const ThirdPoint = () => {
  return (
    <div className="third-point">
      <div style={{ marginBottom: 60 }} id="third"></div>
      <div className="third-text"> О НАС</div>
      <div className="first-com">Мы команда ID WATCH</div>
      <div className="second-com">
        - с 2023 года занимаемся наручными часами.
      </div>
      <div className="third-text third-text-inner">У НАС</div>
      <div className="items-wrapper">
        <div className="item-box">
          <img src="3icon1.svg" />
          <span>Быстрая доставка по всей России</span>
        </div>
        <div className="item-box">
          <img src="3icon2.svg" />
          <span>Гарантия качества</span>
        </div>
        <div className="item-box">
          <img src="3icon3.svg" />
          <span>Брендовый товар</span>
        </div>
        <div className="item-box">
          <img src="3icon4.svg" />
          <span>Клиентский сервис</span>
        </div>
      </div>
      <div className="first-com" style={{ marginTop: 20, fontSize: 20 }}>
        Кто наши клиенты?
      </div>
      <div className="items-wrapper clients-wrapper">
        <div className="item-box client-item-box">
          <img src="client1.svg" style={{ height: 100 }} />
          <span>client</span>
        </div>
        <div className="item-box client-item-box">
          <img src="client2.svg" style={{ height: 100 }} />
          <span>Модные и молодые</span>
        </div>
        <div className="item-box client-item-box">
          <img src="client3.svg" style={{ height: 100 }} />
          <span>Любители классики</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdPoint;
