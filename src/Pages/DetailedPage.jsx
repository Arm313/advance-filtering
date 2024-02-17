import React from "react";
import { useParams } from "react-router-dom";
import products from "../db/data";

const DetailedPage = () => {
  const { id } = useParams();

  const item = products.filter((x) => x.id == id);
  console.log("item:", item);

  const { title, img, color, reviews, newPrice, company, category } = item[0];
  return (
    <section
      className="detailed-container"
      style={{
        marginLeft: "5rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <h2>{company}</h2>
      <p>{category}</p>
      <p style={{color: color}}>{color}</p>
      <p>{reviews}</p>
      <h1>${newPrice}</h1>
      <img src={img} alt="" />
    </section>
  );
};

export default DetailedPage;
