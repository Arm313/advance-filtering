import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { favorit } = useSelector((state) => state.favorit);
  const { basket } = useSelector((state) => state.basket);

  // const basketData = JSON.parse(localStorage.getItem("basket"));

  return (
    <nav>
      <div className="logo-container">
        <NavLink to="/">🛒</NavLink>
      </div>

      <div className="profile-container">
        <NavLink to="/favorit" className="favorit-icon">
          {favorit?.length ? (
            <div className="favoritCount">{favorit?.length}</div>
          ) : null}
          <FiHeart className="nav-icons" />
        </NavLink>

        <NavLink to="/">
          <AiOutlineUserAdd className="nav-icons" />
        </NavLink>
        <Link to="/karzina">
          {basket?.length ? (
            <div className="favoritCount">{basket?.length}</div>
          ) : null}
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
