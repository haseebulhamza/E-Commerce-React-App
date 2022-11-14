import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import { Navbar } from "./Components/Navbar";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  //****************************************
  //                  STATES
  //****************************************
  // Total price
  const [total, setTotal] = useState(0);
  // Total Products in Cart
  const [totalProducts, setTotalProducts] = useState(0);
  // Cart Array
  const [cart, setCart] = useState([]);
  // Products Array
  const [products, setProducts] = useState([]);
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex-col ${darkMode ? "bg-gray-900" : "bg-blue-50"} h-screen`}
    >
      <AppContext.Provider
        value={{
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
        }}
      >
        <QueryClientProvider client={client}>
          <Router>
            {/* Navbar Component  */}
            <Navbar />

            <Routes>
              <Route path="/E-Commerce-React-App" element={<Home />} />
              <Route path="/cart" element={<Cart className="bg-blue-300" />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
