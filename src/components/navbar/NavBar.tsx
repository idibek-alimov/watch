import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar-box">
      <div className="navbar-item">Главное</div>

      <div className="navbar-item">
        <a href="#second">Хиты</a>
      </div>
      <div className="navbar-item">
        <a href="#third">О нас</a>
      </div>
      <div className="navbar-item">Часы</div>
      <div className="navbar-item">
        <a href="#five">Ассортимент</a>
      </div>
      <div className="navbar-item">Акции</div>
      <div className="navbar-item">Отзывы</div>
      <div className="navbar-item">Контакты</div>
    </div>
  );
};

export default NavBar;
