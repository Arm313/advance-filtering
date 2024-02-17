import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Link, useLocation } from "react-router-dom";
import { addFav, delFav } from "../Redux/favoritReducer";
import {
  addToCard,
  decrement,
  increment,
  removFromCard,
} from "../Redux/cardSlice";

const Card = ({ item }) => {
  const { id, img, title, count, reviews, prevPrice, newPrice } = item;

  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Link to={`/detailed-page/${id}`} className="card">
      {location?.pathname == "/favorit" || location?.pathname == "/karzina" ? (
        <button
          className="favorit"
          onClick={
            ((e) =>
              location?.pathname == "/favorit"
                ? (e.preventDefault(), dispatch(delFav(item)))
                : (e.preventDefault(),
            dispatch(removFromCard(item))))
          }
        >
          ❌
        </button>
      ) : (
        <button
          className="favorit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addFav(item));
          }}
        >
          ❤️
        </button>
      )}

      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {/* {star} {star} {star} {star} */}
          {location?.pathname !== "/karzina" && (
            <span className="total-reviews"> {reviews}</span>
          )}
          {location?.pathname == "/karzina" && (
            <div className="count-box">
              <div
                className="increment"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(increment(item));
                }}
              >
                🔼
              </div>
              <div className="count">{count}</div>
              <div
                className="decrement"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(decrement(item));
                }}
              >
                🔽
              </div>
            </div>
          )}
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>

          <div className="bag">
            {location?.pathname !== "/karzina" ? (
              <button
                className="bag-div"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCard({ ...item, count: 1 }));
                }}
              >
                <BsFillBagHeartFill className="bag-icon" />
              </button>
            ) : null}
          </div>
        </section>
      </div>
    </Link>
  );
};

export default Card;
