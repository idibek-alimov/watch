import React from "react";

import "./Four.css";
import { gsap } from "gsap";
import { animate } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
interface FourItemProp {
  pic: string;
  name: string;
  description: string;
}
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".four-item-box",
  {},
  {
    scrollTrigger: ".four-item-box",
    scale: 1.5,
    backgroundColor: "yellow",
  }
);
const Four = () => {
  let data: FourItemProp[] = [
    {
      pic: "watch1.png",
      name: "Классические",
      description:
        "Классические часы - часы, сделанные по стандартной технологии. Состоят из механизма, работающего на плоской батарее, с циферблатом. Часто содержат секундомер и ячейка с числом месяца. Имеет механическую систему регулировки времени. Можно использовать с кожаным или металлическим ремнём. Подходит под классическую одежду и кежуал стиль.",
    },
    {
      pic: "watch2.png",
      name: "Механические",
      description:
        "Механические часы - часы, сделанные по технологии при котором часы работают от механического движения часов с помощью специального механизма. Часто содержат секундомер. Имеет механическую систему регулировки времени. Можно использовать с кожаным или металлическим ремнём. Подходит под классическую одежду и кежуал стиль.",
    },
    {
      pic: "watch3.png",
      name: "Умные",
      description:
        "Умные (Smart) часы - часы, сделанные современным технологиям, используя программное обеспечение. Кроме времени, может показывать уведомления смартфона, пульс, навигация, погода и прочее. Имеет сенсорный экран. Можно использовать с кожаным или эластичным ремнём. Подходит под любой стиль стиль.",
    },
  ];
  const FourItem = (item: FourItemProp) => {
    return (
      <div className="four-item-box">
        <img src={item.pic} />
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
      </div>
    );
  };
  return (
    <div className="four-box">
      <div id="four"></div>
      <div className="four-text">ВИДЫ ЧАСОВ</div>
      <div className="four-items-wrapper">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <FourItem {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Four;
