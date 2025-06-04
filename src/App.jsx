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

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home car={car} setCar={setCar} tem={tem} />}
        />
        <Route
          path="/car"
          element={<Car car={car} setCar={setCar} tem={tem} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
