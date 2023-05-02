import React from "react";
import { Item } from "../secondPoint/SecondPoint";
import ItemProp from "../secondPoint/SecondPoint";
import "./Five.css";
import { useGlobalContext } from "../../AppContext";
const Five = () => {
  const { data2 } = useGlobalContext();
  // let data = [
  //   {
  //     img: "watch1.png",
  //     name: "Mazzucato",
  //     description: "Механические часы желтые",
  //     oldPrice: 7990,
  //     newPrice: 6990,
  //   },
  //   {
  //     img: "watch2.png",
  //     name: "Apple Watch 3",
  //     description: "Smart часы белые",
  //     oldPrice: 23990,
  //     newPrice: 20990,
  //   },
  //   {
  //     img: "watch3.png",
  //     name: "Samsung Watch",
  //     description: "Smart часы графитовые",
  //     oldPrice: 16990,
  //     newPrice: 14990,
  //   },
  //   {
  //     img: "watch4.png",
  //     name: "Zeppelin",
  //     description: "Классические часы металлика",
  //     oldPrice: 6990,
  //     newPrice: 5990,
  //   },
  //   {
  //     img: "watch5.png",
  //     name: "Stuhrling",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch6.png",
  //     name: "Seiho",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch1.png",
  //     name: "Mazzucato",
  //     description: "Механические часы желтые",
  //     oldPrice: 7990,
  //     newPrice: 6990,
  //   },
  //   {
  //     img: "watch2.png",
  //     name: "Apple Watch 3",
  //     description: "Smart часы белые",
  //     oldPrice: 23990,
  //     newPrice: 20990,
  //   },
  //   {
  //     img: "watch3.png",
  //     name: "Samsung Watch",
  //     description: "Smart часы графитовые",
  //     oldPrice: 16990,
  //     newPrice: 14990,
  //   },
  //   {
  //     img: "watch4.png",
  //     name: "Zeppelin",
  //     description: "Классические часы металлика",
  //     oldPrice: 6990,
  //     newPrice: 5990,
  //   },
  //   {
  //     img: "watch5.png",
  //     name: "Stuhrling",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch6.png",
  //     name: "Seiho",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch1.png",
  //     name: "Mazzucato",
  //     description: "Механические часы желтые",
  //     oldPrice: 7990,
  //     newPrice: 6990,
  //   },
  //   {
  //     img: "watch2.png",
  //     name: "Apple Watch 3",
  //     description: "Smart часы белые",
  //     oldPrice: 23990,
  //     newPrice: 20990,
  //   },
  //   {
  //     img: "watch3.png",
  //     name: "Samsung Watch",
  //     description: "Smart часы графитовые",
  //     oldPrice: 16990,
  //     newPrice: 14990,
  //   },
  //   {
  //     img: "watch4.png",
  //     name: "Zeppelin",
  //     description: "Классические часы металлика",
  //     oldPrice: 6990,
  //     newPrice: 5990,
  //   },
  //   {
  //     img: "watch5.png",
  //     name: "Stuhrling",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch6.png",
  //     name: "Seiho",
  //     description: "Механические часы металлика",
  //     oldPrice: 9990,
  //     newPrice: 7990,
  //   },
  //   {
  //     img: "watch1.png",
  //     name: "Mazzucato",
  //     description: "Механические часы желтые",
  //     oldPrice: 7990,
  //     newPrice: 6990,
  //   },
  //   {
  //     img: "watch2.png",
  //     name: "Apple Watch 3",
  //     description: "Smart часы белые",
  //     oldPrice: 23990,
  //     newPrice: 20990,
  //   },
  //   {
  //     img: "watch3.png",
  //     name: "Samsung Watch",
  //     description: "Smart часы графитовые",
  //     oldPrice: 16990,
  //     newPrice: 14990,
  //   },
  //   {
  //     img: "watch4.png",
  //     name: "Zeppelin",
  //     description: "Классические часы металлика",
  //     oldPrice: 6990,
  //     newPrice: 5990,
  //   },
  //   {
  //     img: "watch3.png",
  //     name: "Samsung Watch",
  //     description: "Smart часы графитовые",
  //     oldPrice: 16990,
  //     newPrice: 14990,
  //   },
  //   {
  //     img: "watch4.png",
  //     name: "Zeppelin",
  //     description: "Классические часы металлика",
  //     oldPrice: 6990,
  //     newPrice: 5990,
  //   },
  // ];
  return (
    <div className="five-box">
      <div style={{ fontSize: 25, fontWeight: "800", marginTop: 20 }}>
        АССОРТИМЕНТЫ
      </div>
      <div className="five-items-wrapper">
        {data2.map((item, index) => {
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

export default Five;
