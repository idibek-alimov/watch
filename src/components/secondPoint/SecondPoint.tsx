import React, { useEffect, useState } from "react";
import "./SecondPoint.css";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";
import { useInView } from "react-intersection-observer";
import {
  motion as m,
  useMotionValue,
  useTransform,
  inView,
  useViewportScroll,
  useScroll,
  useAnimation,
} from "framer-motion";
export interface ItemProp {
  img: string | null;
  name: string | null;
  description: string | null;
  oldPrice: number | null;
  newPrice: number | null;
}
export const Item = (item: ItemProp) => {
  const { chosenProduct, productDispatch } = useGlobalContext();
  const Wind = () => {
    return <div>hello world</div>;
  };
  const [visible, setVisible] = useState(false);
  const itemVariants = {
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0, rotate: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  //const { scrollY, scrollYProgress } = useScroll();
  //const opacity = useTransform(scrollY, [0, 100], [0, 360], { clamp: false });
  // const scale = useTransform(scrollY, [0, 150, 200], [1, 1.4, 1]);
  //const { scrollYProgress } = useViewportScroll()
  // const scale = useTransform(scrollY, [0, 0.1, 0.31], [1, 1.3, 1]);
  return (
    <m.div
      ref={ref}
      className="item-box "
      animate={controls}
      initial="hidden"
      variants={itemVariants}
      // initial={{ scale: 1 }}
      // whileInView={{ scale: 2 }}
      // viewport={{ margin: "100px" }}
      // transition={{ duration: 1 }}
    >
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
          setVisible(true);
          productDispatch({
            type: AppActionsKind.ADD_CHOSEN,
            payload: item,
          });
          //console.log("after", chosenProduct);
        }}
      >
        Выбрать
      </button>
      {visible ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <m.div
            //initial={{ y: 100, width: 20 }}
            whileHover={{ scale: 1.6 }}
            animate={
              {
                // y: 0,
                // width: 160,
                // scale: [1, 2, 2, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }
            }
            transition={
              {
                // repeat: Infinity,
                // ease: "easeInOut",
                // duration: 0.4,
                // type: "spring",
                // stiffness: 260,
                // damping: 20,
              }
            }
            // style={{
            //   backgroundColor: "red",
            //   height: 50,
            //   overflow: "hidden",
            // }}
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 1.1 }}

            // drag="x"
            // style={{ x, opacity }}
          >
            <Wind />
          </m.div>
        </div>
      ) : (
        ""
      )}
    </m.div>
  );
};
const SecondPoint = () => {
  const { data1 } = useGlobalContext();

  return (
    <div className="second-box">
      <div className="second-text">ХИТ ПРОДАЖ</div>
      <div className="items-wrapper">
        {data1.map((item) => {
          return (
            <div className="wrapper-child">
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPoint;
