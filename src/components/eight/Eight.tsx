import React from "react";
import "./Eight.css";
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
  return (
    <div className="eight-box">
      <span className="eight-text">OTZIV</span>
      <div className="eight-items-wrapper">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <EightItem {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eight;
