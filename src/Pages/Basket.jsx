import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Basket = () => {
  const { basket } = useSelector((state) => state.basket);
  const { totalAmount } = useSelector((state) => state.basket);

  return (
    <>
      {basket?.length ? <h2 style={{textAlign: "center"}}> Ընդհանուր գին՝ ${totalAmount}</h2> : null}
      <section className="basket-container" style={{ marginLeft: "5rem" }}>
        {basket?.length ? (
          basket.map((item) => {
            return <Card key={item.title} item={item} />;
          })
        ) : (
          <h2>Զամբյուղը դատարկ է</h2>
        )}
      </section>
    </>
  );
};

export default Basket;
