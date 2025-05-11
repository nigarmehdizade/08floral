import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h1>Favorilər</h1>
      {wishlist.length === 0 ? (
        <p>Favori yoxdur</p>
      ) : (
        wishlist.map(item => (
          <div key={item._id}>
            <img src={item.image} alt={item.name} width={100} />
            <p>{item.name} - {item.price} AZN</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
