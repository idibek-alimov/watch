import React, { useState } from "react";
import "./Nine.css";
import { useGlobalContext } from "../../AppContext";
import { ItemProp } from "../secondPoint/SecondPoint";
import { AppActionsKind } from "../../appDispatch";
import axios from "axios";
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
      <form onSubmit={onSubmitHandle}>
        <div className="nine-text">
          Оставьте заявку, и мы ответим вам в течении 15 минут!
        </div>
        {chosenProduct?.name &&
        chosenProduct?.description &&
        chosenProduct?.newPrice &&
        chosenProduct?.img ? (
          <Item {...chosenProduct} />
        ) : (
          ""
        )}
        <div className="name-number-box">
          <div className="name-box">
            <span>Имя</span>
            <input
              onChange={(event) => {
                console.log(userInfo);
                setUserInfo({ ...userInfo, customer_name: event.target.value });
              }}
            />
          </div>
          <div className="number-box">
            <span>Номер телефона</span>
            <input
              onChange={(event) => {
                setUserInfo({ ...userInfo, number: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="comment-box">
          <span>Комментарий</span>
          <textarea
            onChange={(event) => {
              setUserInfo({ ...userInfo, comment: event.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit">Zapros</button>
        </div>
      </form>
    </div>
  );
};

export default Nine;
