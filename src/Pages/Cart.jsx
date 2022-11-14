import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Cart = () => {
  // State call
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
  } = useContext(AppContext);
  // ******************************************
  //                Function deleteClick()
  // ******************************************
  function deleteClick(cartItem) {
    // Setting Cart
    setCart(
      cart.filter((copyCartItem) => {
        return cartItem !== copyCartItem;
      })
    );
    // Set products
    // setProducts(products.map((copyProduct)=>{
    //   if(cartItem.id === copyProduct.id){
    //     return{...copyProduct, state: "block", state2: "hidden"}
    //   }else{
    //     return {copyProduct}
    //   }
    // }))
    // Set Total (later)
    setTotal(total - cartItem.price * cartItem.quantity);
    // set total products
    setTotalProducts(totalProducts - cartItem.quantity);
    // setting Products
    setProducts(
      products.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, added: false };
        } else {
          return item;
        }
      })
    );
  }

  // ******************************************
  //                Function plusClick()
  // ******************************************
  function plusClick(cartItem) {
    // Setting Cart
    setCart(
      cart.map((copyCartItem) => {
        if (cartItem.id === copyCartItem.id) {
          return { ...copyCartItem, quantity: cartItem.quantity + 1 };
        } else {
          return copyCartItem;
        }
      })
    );
    // Setting total (later)
    setTotal(total + cartItem.price);
    // setting total products
    setTotalProducts(totalProducts + 1);
  }

  // ******************************************
  //                Function minusClick()
  // ******************************************
  function minusClick(cartItem) {
    // Setting Cart
    setCart(
      cart.map((copyCartItem) => {
        if (cartItem.id === copyCartItem.id) {
          return {
            ...copyCartItem,
            quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
          };
        } else {
          return copyCartItem;
        }
      })
    );
    // Setting total (later)
    if (cartItem.quantity > 1) {
      setTotal(total - cartItem.price);
      setTotalProducts(totalProducts - 1);
    }
  }

  return (
    <div
      className={`absolute top-24 w-full 2xl:px-96 ${
        darkMode ? "bg-gray-800" : "bg-blue-50"
      }`}
    >
      <div className="">
        <h1
          className={`font-bold text-2xl text-center mb-10 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Shopping Cart
        </h1>
        <h1
          className={`font-semibold text-xl pl-7 mb-3 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Subtotal ({totalProducts} items){" "}
          <span class="text-orange-700">
            ${total < 0.0 ? 0.0 : total.toFixed(2)}
          </span>
        </h1>
        <button className="bg-orange-600 w-64 h-11 mb-4 text-white font-bold ml-7 hover:bg-orange-500">
          Proceed to Checkout
        </button>
      </div>

      <div className="w-60 bg-slate-100 mb-4 hidden">
        {/* <!-- subtotal div  --> */}
        <div className="flex justify-between p-3 border-solid border-gray-600">
          <p className="text-sm font-semibold">Subtotal</p>
          <p className="text-sm font-semibold text-green-400">$79.98</p>
        </div>

        {/* <!-- total div  --> */}
        <div className="flex justify-between py-5 px-3">
          <p className="font-bold">Total</p>
          <p className="font-bold text-orange-600">$79.98</p>
        </div>
      </div>

      {/* CART PRODUCTSSSS DIV  */}
      <div>
        {/* TAGS DIV  */}
        <div
          className={`invisible sm:visible flex justify-between bg-gray-200 px-24 py-3 border-gray-400 border-b-2
        ${darkMode ? "bg-indigo-600" : "bg-indigo-600"}`}
        >
          <div>
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              PRODUCT NAME
            </p>
          </div>
          <div className="flex gap-20">
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              PRICE
            </p>
            <p
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              TOTAL
            </p>
          </div>
        </div>
        {cart.map((cartItem) => {
          return (
            <div>
              {/* // CART PRODUCT DIV (possible component) */}
              <div
                className="h-60 flex justify-between pl-6 pr-6 pt-9 border-solid border-b-4
            sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
              >
                {/* Image  */}
                <img
                  className="h-40 w-32 object-contain"
                  src={cartItem.image}
                  alt="product"
                />
                <div>
                  {/* Product Name  */}
                  <p
                    className={`w-44 text-sm font-semibold mb-1 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {cartItem.title}
                  </p>
                  {/* Product Price  */}
                  <p className={`text-lg mb-1 text-green-600`}>
                    ${cartItem.price}
                  </p>

                  {/* Quantity Div  */}
                  <div className="flex gap-2 mb-4">
                    {/* Plus Button  */}
                    <button
                      className="bg-indigo-400 w-6"
                      onClick={() => plusClick(cartItem)}
                    >
                      +
                    </button>
                    <div className="text-sm">{cartItem.quantity}</div>
                    {/* Minus Button  */}
                    <button
                      className="bg-slate-300 w-6"
                      onClick={() => minusClick(cartItem)}
                    >
                      -
                    </button>
                  </div>
                  {/* Quantity Div End */}

                  {/* DELETE BUTTON  */}
                  <button
                    className="text-sm bg-orange-600 text-white  font-bold w-36 h-9 rounded hover:bg-orange-500"
                    onClick={() => deleteClick(cartItem)}
                  >
                    Delete Item
                  </button>
                </div>
              </div>

              {/* sub rectangle  */}
              <div className="hidden sm:flex sm:justify-between sm:pl-11 sm:pr-3 sm:pb-6 sm:border-solid sm:border-b-gray-100 sm:mt-8">
                {/* inside sub rectangle product image and description */}
                <div className="flex gap-8">
                  {/* image div  */}
                  <img
                    className="w-16 h-20 xl:w-28 xl:h-36"
                    src={cartItem.image}
                    alt="product"
                  />
                  {/* image div  */}

                  {/* description div  */}
                  <div>
                    <p
                      className={`font-semibold text-sm sm:w-32 xl:text-lg xl:w-44 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {cartItem.title}
                    </p>
                    {/* Quantity Div  */}
                    <div className="flex gap-2 mb-4">
                      {/* Plus Button  */}
                      <button
                        className="bg-indigo-600 text-white w-6"
                        onClick={() => plusClick(cartItem)}
                      >
                        +
                      </button>
                      <div
                        className={`${
                          darkMode ? "text-white" : "text-black"
                        } text-sm`}
                      >
                        {cartItem.quantity}
                      </div>
                      {/* Minus Button  */}
                      <button
                        className="bg-indigo-600 text-white w-6"
                        onClick={() => minusClick(cartItem)}
                      >
                        -
                      </button>
                    </div>
                    {/* Quantity Div End */}
                  </div>
                  {/* description div  */}
                </div>
                {/* product image and description div end  */}

                {/* price quantity and total div  */}
                <div className="flex gap-5">
                  <p
                    className={`mr-10 text-lg font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    ${cartItem.price}
                  </p>
                  <p
                    className={`mr-9 text-lg font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                  </p>
                  {/* icons  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-7 h-7 cursor-pointer ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                    onClick={() => deleteClick(cartItem)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                {/* price quantity and total div  */}
              </div>
              {/* sub rectangle  */}
            </div>
            // CART PRODUCT DIV
          );
        })}
      </div>
      {/* CART PRODUCTSSSS DIV  */}
    </div>
  );
};

export default Cart;
