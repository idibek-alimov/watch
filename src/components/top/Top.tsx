import React, { useState, Dispatch, useEffect } from "react";
import "./Top.css";
import { GiHamburgerMenu, GiSaphir } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import {
  motion as m,
  useAnimation,
  useScroll,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
//import NavBar from "../navbar/NavBar";
const Top = () => {
  const itemVariants = {
    visible: {
      backgroundColor: "transparent",
      transition: { duration: 0.001 },
    },
    hidden: { backgroundColor: "black" },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    console.log(scrollPosition);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show, setShow] = useState(false);
  const PartsDetail = () => {
    return (
      <>
        <div className="navbar-item">
          <a href="#second">Хиты</a>
        </div>
        <div className="navbar-item">
          <a href="#third">О нас</a>
        </div>
        <div className="navbar-item">
          <a href="#four">Часы</a>
        </div>
        <div className="navbar-item">
          <a href="#five">Ассортимент</a>
        </div>
        <div className="navbar-item">
          <a href="#eight">Отзывы</a>
        </div>
        <div className="navbar-item">Контакты</div>
      </>
    );
  };
  const Parts = () => {
    return (
      <div
        className="navbar-box"
        style={{
          backgroundColor: "transparent",
          flexWrap: "wrap",
        }}
      >
        <PartsDetail />
      </div>
    );
  };
  const MiniParts = () => {
    return (
      <div className="mini-parts-box">
        <PartsDetail />
      </div>
    );
  };
  return (
    <div
      className="top-box"
      // style={{
      //   backgroundColor: scrollPosition <= 20 ? "transparent" : "black",
      // }}
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="top-mini"
        style={{ backgroundColor: "transparent", position: "relative" }}
      >
        {show ? (
          <m.div
            className="mini-parts-wrapper"
            initial={{ left: 0, width: 0, height: 0 }}
            animate={{ width: "100%", height: 150 }}
            transition={{
              duration: 1,
            }}
          >
            <BsXLg onClick={() => setShow(false)} className="cancel-icon" />
            <MiniParts />
            <img src="logotiny.svg" className="logomini" />
          </m.div>
        ) : (
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => {
              setShow(true);
            }}
          />
        )}
        <a href="#first">
          <img src="logotiny.svg" className="logo" />
        </a>
        <a href="#nine">
          <img src="newcart.svg" />
        </a>
      </div>

      <div className="top-top" style={{ backgroundColor: "transparent" }}>
        <a href="#first">
          <img
            className="logo"
            src="gr_logo.png"
            alt="gr_logo.png"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
        <Parts />
        {/* <div className="navbar-box" style={{ backgroundColor: "transparent" }}>
          <div className="navbar-item">Главное</div>
          <div className="navbar-item">
            <a href="#second">Хиты</a>
          </div>
          <div className="navbar-item">
            <a href="#third">О нас</a>
          </div>
          <div className="navbar-item">
            <a href="#four">Часы</a>
          </div>
          <div className="navbar-item">
            <a href="#five">Ассортимент</a>
          </div>
          <div className="navbar-item">Акции</div>
          <div className="navbar-item">
            <a href="#eight">Отзывы</a>
          </div>
          <div className="navbar-item">Контакты</div>
        </div> */}
        <div className="cart-box">
          <a href="#nine">
            <img
              src="cart.svg"
              className="cart-image"
              style={{ width: "100%", height: 40 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
