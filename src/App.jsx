import { HashRouter, Routes, Route } from "react-router-dom";
import Phones from "./pages/phones.jsx";
import Car from "./pages/car.jsx";
import Books from "./pages/books.jsx";
import { useState, useEffect } from "react";
import Home from "./pages/home.jsx";
import cardBooks from "../cardsBooks.js";
import cardPhones from "../card.js";
function App() {
  const [car, setCar] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [tem, setTem] = useState(car.length > 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(car));
    setTem(car.length > 0);
  }, [car]);

  const totalItems = car.reduce((acc, card) => acc + card.quantity, 0);

  const handleAddToCart = (product) => {
    setCar((prevCart) => {
      const existing = prevCart.find((card) => card.id === product.id);
      if (existing) {
        return prevCart.map((card) =>
          card.id === product.id
            ? { ...card, quantity: card.quantity + 1 }
            : card
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              item={[...cardBooks, ...cardPhones]}
              car={car}
              setCar={setCar}
              tem={tem}
              totalItems={totalItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/phones"
          element={
            <Phones
              tem={tem}
              setCar={setCar}
              totalItems={totalItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/car"
          element={
            <Car
              car={car}
              setCar={setCar}
              tem={tem}
              totalItems={totalItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/books"
          element={
            <Books
              car={car}
              setCar={setCar}
              tem={tem}
              totalItems={totalItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
