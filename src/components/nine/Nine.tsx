import React, { useState } from "react";
import "./Nine.css";
import { useGlobalContext } from "../../AppContext";
import { ItemProp } from "../secondPoint/SecondPoint";
import { AppActionsKind } from "../../appDispatch";
import axios from "axios";
import { motion as m } from "framer-motion";
//import { Item } from "../secondPoint/SecondPoint";
interface UserInfoProp {
  customer_name: string;
  number: string;
  comment: string;
}
export const Item = (item: ItemProp) => {
  const { chosenProduct, productDispatch } = useGlobalContext();
  return (
    <div className="item-box">
      <div className="image-box">
        <img src={item.img ? item.img : ""} alt="img" />
      </div>
      <div className="item-info-box">
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price-box">
          <del>{item.oldPrice}</del>
          <ins>{item.newPrice}</ins>
        </div>
      </div>
      <button
        onClick={() => {
          //console.log("before", chosenProduct);
          productDispatch({
            type: AppActionsKind.REMOVE_CHOSEN,
          });
          //console.log("after", chosenProduct);
        }}
      >
        remove
      </button>
    </div>
  );
};
const Nine = () => {
  const { chosenProduct } = useGlobalContext();
  const [userInfo, setUserInfo] = useState<UserInfoProp>({
    customer_name: "",
    number: "",
    comment: "",
  });

  const onSubmitHandle = (event: React.SyntheticEvent) => {
    //event.preventDefault();
    var data = { ...userInfo, ...chosenProduct };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="nine-box">
      <div id="nine"></div>
      <form onSubmit={onSubmitHandle}>
        <div className="nine-text">ВЫБРАННЫЕ ТОВАРЫ</div>

        {chosenProduct?.name &&
        chosenProduct?.description &&
        chosenProduct?.newPrice &&
        chosenProduct?.img ? (
          <m.div initial={false} animate={{ scale: 0.8 }}>
            <Item {...chosenProduct} />
          </m.div>
        ) : (
          ""
        )}
        <div className="nine-text-mini">
          Напишите своё имя, номер телефона и оставьте комментарии к заказу. Мы
          ответим вам в ближайщее время!
        </div>
        <div className="name-number-box">
          <div className="name-box">
            <span>Имя</span>
            <input
              required
              placeholder="Имя"
              onChange={(event) => {
                console.log(userInfo);
                setUserInfo({ ...userInfo, customer_name: event.target.value });
              }}
            />
          </div>
          <div className="number-box">
            <span>Номер телефона</span>
            <input
              placeholder="Номер"
              required
              onChange={(event) => {
                setUserInfo({ ...userInfo, number: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="comment-box">
          <span>Комментарий</span>
          <textarea
            required
            placeholder="Комментарии"
            onChange={(event) => {
              setUserInfo({ ...userInfo, comment: event.target.value });
            }}
          />
        </div>
        <div className="submit-box">
          <button type="submit" className="submit-button">
            ОФОРМИТЬ ЗАЯВКУ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Nine;
