import React from "react";
import "./SecondPoint.css";
export interface ItemProp {
  img: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
}
export const Item = (item: ItemProp) => {
  return (
    <div className="item-box">
      <div className="image-box">
        <img src={item.img} alt="img" />
      </div>
      <div className="item-info-box">
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price-box">
          <del>{item.oldPrice}</del>
          <ins>{item.newPrice}</ins>
        </div>
      </div>
      <button>Выбрать</button>
    </div>
  );
};
const SecondPoint = () => {
  let data: ItemProp[] = [
    {
      img: "watch1.png",
      name: "Mazzucato",
      description: "Механические часы желтые",
      oldPrice: 7990,
      newPrice: 6990,
    },
    {
      img: "watch2.png",
      name: "Apple Watch 3",
      description: "Smart часы белые",
      oldPrice: 23990,
      newPrice: 20990,
    },
    {
      img: "watch3.png",
      name: "Samsung Watch",
      description: "Smart часы графитовые",
      oldPrice: 16990,
      newPrice: 14990,
    },
    {
      img: "watch4.png",
      name: "Zeppelin",
      description: "Классические часы металлика",
      oldPrice: 6990,
      newPrice: 5990,
    },
    {
      img: "watch5.png",
      name: "Stuhrling",
      description: "Механические часы металлика",
      oldPrice: 9990,
      newPrice: 7990,
    },
    {
      img: "watch6.png",
      name: "Seiho",
      description: "Механические часы металлика",
      oldPrice: 9990,
      newPrice: 7990,
    },
  ];

  return (
    <div className="second-box">
      <div style={{ fontSize: 30 }}>ХИТ ПРОДАЖ</div>
      <div className="items-wrapper">
        {data.map((item) => {
          return (
            <div>
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPoint;
