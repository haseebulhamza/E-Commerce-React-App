import React from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../App";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  // Calling the states
  const {
    cart,
    setCart,
    products,
    setProducts,
    total,
    setTotal,
    totalProducts,
    setTotalProducts,
    darkMode,
    setDarkMode,
  } = useContext(AppContext);

  // useEffect(() => {
  //   const prods = JSON.parse(localStorage.getItem("products"));
  //   setProducts(prods);
  // }, []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ******************************************
  //                Function addClick()
  // ******************************************
  const addClick = (product) => {
    setCart([
      ...cart,
      {
        // id: cart.length > 0 ? cart[cart.length - 1].id + 1 : 1,
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        // initial quantity
        quantity: 1,
      },
    ]);

    // console.log(products);
    // Set Total
    setTotal(total + product.price);
    // set total Products in Cart
    setTotalProducts(totalProducts + 1);
    // setting Products
    setProducts(
      products.map((item) => {
        if (item.id === product.id) {
          return { ...item, added: true };
        } else {
          return item;
        }
      })
    );
  };

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (products.length <= 0) {
      setProducts(response.data);
    } else {
      setProducts(products);
    }

    return response.data;
  };

  // API CALL
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error! {error.message}</h1>;
  }

  // console.log(products);

  return (
    // PRODUCTSSS DIV
    <div
      className={`absolute top-14 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6
    ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}
    >
      {/* PRODUCT DIV  */}
      {products.map((product) => {
        return (
          // *************************************
          //              PRODUCT (possible component)
          // *************************************

          <div
            className="h-60 sm:h-auto flex sm:flex-col justify-between px-6 sm:pl-11 pt-9 border-solid sm:border-none border-b-4 
          md:border-4 md:border-sky-200"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className={`h-40 sm:h-80 w-32 sm:w-60 sm:mb-3  object-contain shadow-xl
              ${darkMode ? "bg-white" : "bg-white"}`}
            />
            <div className="flex flex-col">
              {/* PRODUCT TITLE  */}
              <h1
                className={`w-44 sm:w-full text-sm mb-1 font-semibold
              sm:font-bold sm:text-xs sm:mb-1 xl:w-60 ${
                darkMode ? "text-white" : "text-black"
              }`}
              >
                {product.title}
              </h1>
              {/* PRODUCT PRICE  */}
              <h1
                className="text-sm mb-1 text-green-600
              sm:text-xs sm:font-bold sm:text-green-700 sm:mb-1"
              >
                ${product.price}
              </h1>

              {/* REVIEWS DIV  */}

              {/* ADD TO CART BUTTON  */}
              <button
                className={`text-sm bg-orange-600 text-white  font-bold w-36 sm:w-4/6 md:w-4/6 lg:w-4/6 xl:w-4/6 h-9 rounded hover:bg-orange-500
              block ${product.added ? "hidden" : "block"}`}
                onClick={() => addClick(product)}
              >
                Add To Cart
              </button>

              <div
                className={`text-green-700 font-semibold ${
                  product.added ? "block" : "hidden"
                }`}
              >
                Item Added to Cart
              </div>
            </div>
          </div>
          // *************************************
          //              PRODUCT END
          // *************************************
        );
      })}
    </div>
  );
};

export default Home;
