import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const { totalProducts, darkMode, setDarkMode } = useContext(AppContext);
  const [style, setStyle] = useState("hidden");
  let styles = "font-bold";

  return (
    <header
      className={`${
        darkMode ? "bg-indigo-900" : "bg-indigo-300"
      } fixed w-full z-10 flex justify-between items-center p-4`}
    >
      <p
        className={`text-lg ${styles} ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        L O G O
      </p>

      {/* medium screen and large screen navbar div  */}
      <div className="flex justify-end gap-5">
        {/* Light Mode Icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
          onClick={() => {
            setDarkMode(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        {/* Dark Mode Icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
          onClick={() => {
            setDarkMode(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>

        <Link className="" to="">
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } hidden md:block lg:block md:font-semibold lg:font-semibold lg:text-lg`}
          >
            Home
          </p>
        </Link>
        <Link className="" to="/cart">
          <div className="relative hidden sm:block md:block lg:block xl:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div
              className="absolute bg-orange-600 text-white font-semibold rounded-full text-xs w-4 text-center
                    top-0 right-0"
            >
              {totalProducts}
            </div>
          </div>
        </Link>
      </div>

      <svg
        onClick={() => {
          setStyle("block");
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${
          darkMode ? "text-white" : "text-black"
        } md:hidden`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/*
        *********************************************
        *******     
                    MOBILE NAVBAR DIV
        *********************************************
      mobile navbar div  */}
      <div
        className={`absolute  z-10 flex-col justify-between top-0 left-0 w-full h-25 ${style} transition ease-in-out
        ${darkMode ? "bg-indigo-900" : "bg-indigo-300"} `}
      >
        <div className="flex justify-between items-center p-5">
          <p
            className={`font-bold text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            L O G O
          </p>
          <div className="flex">
            <svg
              onClick={() => {
                setStyle("hidden");
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <div className="flex-col text-center mb-16">
          <Link className="" to="">
            <div
              onClick={() => {
                setStyle("hidden");
              }}
              className="border-solid text-center border-black border-b-2 pb-2 mb-10"
            >
              <p
                className={`text-md font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Home
              </p>
            </div>
          </Link>

          <Link to="/cart">
            <div
              className={`w-full flex justify-center border-solid border-black border-b-2 pb-2 mb-10 ${
                darkMode ? "bg-indigo-900" : "bg-indigo-300"
              }`}
              onClick={() => {
                setStyle("hidden");
              }}
            >


              <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>


              <div
                className="absolute bg-orange-600 text-white font-semibold rounded-full text-xs w-4 text-center
                        top-0 left-3"
              >
                {totalProducts}
              </div>

              </div>



            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
