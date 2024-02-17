import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorit = () => {
  const { favorit } = useSelector((state) => state.favorit);

  return (
    <section className="card-container" style={{marginLeft: "5rem"}}>
      {favorit?.length
        ? favorit.map((fav) => {
            return <Card key={fav.title} item={fav} />;
          })
        : (
            <h2>Նախընտրած ապրանք չունեք</h2>
        )}
    </section>
  );
};

export default Favorit;
