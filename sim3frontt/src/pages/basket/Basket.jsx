import React, { useEffect, useState } from "react";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("basket");
    if (stored) {
      setBasket(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h1>Səbət</h1>
      {basket.length === 0 ? (
        <p>Boşdur</p>
      ) : (
        basket.map(item => (
          <div key={item._id}>
            <img src={item.image} alt={item.name} width={100} />
            <p>{item.name} - {item.price} AZN</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
