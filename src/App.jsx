import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Car from "./pages/car/car.jsx";
import { useState, useEffect } from "react";

function App() {
  const [car, setCar] = useState([]);
  const [tem, setTem] = useState(false);

  useEffect(() => {
    setTem(car.length > 0);
  }, [car]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
