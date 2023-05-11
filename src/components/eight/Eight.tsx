import React, { HTMLFactory } from "react";
import "./Eight.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
interface EightItemProp {
  pic: string;
  name: string;
  text: string;
}
const Eight = () => {
  let data: EightItemProp[] = [
    {
      pic: "CustomerPic.svg",
      name: "Name",
      text: "Спасибо вам за часы. Все понравилось. Рекомендую всем. Пришла быстро и надежно упаковано. Часы идеально подощлти под руку. И цена приятная.",
    },
    {
      pic: "CustomerPic.svg",
      name: "Name",
      text: "Спасибо вам за часы. Все понравилось. Рекомендую всем. Пришла быстро и надежно упаковано. Часы идеально подощлти под руку. И цена приятная.",
    },
    {
      pic: "CustomerPic.svg",
      name: "Name",
      text: "Спасибо вам за часы. Все понравилось. Рекомендую всем. Пришла быстро и надежно упаковано. Часы идеально подощлти под руку. И цена приятная.",
    },
    {
      pic: "CustomerPic.svg",
      name: "Name",
      text: "Спасибо вам за часы. Все понравилось. Рекомендую всем. Пришла быстро и надежно упаковано. Часы идеально подощлти под руку. И цена приятная.",
    },
    {
      pic: "CustomerPic.svg",
      name: "Name",
      text: "Спасибо вам за часы. Все понравилось. Рекомендую всем. Пришла быстро и надежно упаковано. Часы идеально подощлти под руку. И цена приятная.",
    },
  ];
  const EightItem = (item: EightItemProp) => {
    return (
      <div className="eight-item-box">
        <img src={item.pic} />
        <div className="eight-item-text-wrapper">
          <div className="name">{item.name}</div>
          <span className="text">{item.text}</span>
        </div>
      </div>
    );
  };

  // gsap.registerPlugin(ScrollTrigger);
  // let sections = gsap.utils.toArray(".panel");
  // gsap.to(sections, {
  //   xPercent: -50 * (sections.length - 1),
  //   ease: "none",
  //   // overflowY: "hidden",

  //   scrollTrigger: {
  //     start: "center center",
  //     //end: "+=900",
  //     end: "bottom center",
  //     trigger: ".container",
  //     markers: true,
  //     scrub: true,
  //     // pin: true,
  //     // invalidateOnRefresh: true,
  //     // anticipatePin: 1,
  //     //snap: 1 / (sections.length - 1),
  //   },
  // });

  return (
    <div className="eight-box">
      <div id="eight"></div>
      <span className="eight-text">OTZIV</span>
      {/* <section className=""> */}
      <div className="eight-items-wrapper container">
        {data.map((item, index) => {
          return (
            <div key={index} className="panel">
              <EightItem {...item} />
            </div>
          );
        })}
      </div>
      {/* </section> */}
    </div>
  );
};

export default Eight;
