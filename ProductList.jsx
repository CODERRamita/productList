// import React, { useEffect,useState} from 'react'

// const ProductList = () => {

//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     // fetch products from FakestoreAPI
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((results) => setProducts(results))
//       .catch((error) => console.log("Error Fetching Products:", error)
//       )

//   }, []);


//   return (
//     <>
//       <div className='container mx-auto p-5'>
//         <h1 className='text-3xl font-bold text-center mb-6'> Products List</h1>
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//           {products.map((product) => {

//             <div
//               key={product.id}
//               className='bg-white shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105'>

//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className='h-40 mx-auto object-contain'
//               />

//               <div className="text-center mt-4 opacity-0 translate-y-10 transition-opacity transition-transform duration-700 hover:opacity-100 hover:transalate-y-0">
//                 <h2 className='text-lg font-semibold'>{product.title}</h2>
//                 <p className='text-gray-600'>${product.price} </p>
//               </div>

//             </div>
//           })}
//         </div>
//       </div>

//     </>
//   )


// }

// export default ProductList
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p className="text-center text-red-500">Failed to load products: {error}</p>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
            <div className="text-center mt-4 opacity-0 translate-y-10 transition-opacity transition-transform duration-700 hover:opacity-100 hover:translate-y-0">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
