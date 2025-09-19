import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Car from "./pages/car/car.jsx";
import { useState, useEffect } from "react";

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
      </Routes>
    </HashRouter>
  );
}

export default App;
