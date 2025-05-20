// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "../styles/Home.module.scss";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [basket, setBasket] = useState([]);
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/pro")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error("API xətası:", err));
//   }, []);

//   const addToBasket = (product) => {
//     if (!basket.find(item => item._id === product._id)) {
//       const newBasket = [...basket, product];
//       setBasket(newBasket);
//       localStorage.setItem("basket", JSON.stringify(newBasket));
//     }
//   };

//   const addToWishlist = (product) => {
//     if (!wishlist.find(item => item._id === product._id)) {
//       const newWishlist = [...wishlist, product];
//       setWishlist(newWishlist);
//       localStorage.setItem("wishlist", JSON.stringify(newWishlist));
//     }
//   };

//   return (
//     <div className={styles.grid}>
//       {products.map(product => (
//         <div key={product._id} className={styles.card}>
//           <img src={product.image} alt={product.name} width={150} />
//           <h2>{product.name}</h2>
//           <p>{product.price} AZN</p>
//           <div className={styles.buttons}>
//             <button onClick={() => addToBasket(product)}>Səbətə at</button>
//             <button onClick={() => addToWishlist(product)}>Favoriyə əlavə et</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;
