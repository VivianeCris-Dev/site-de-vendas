import carr from "../assets/carr.svg";
import carGray from "../assets/cargray.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, memo } from "react";

function Header({ tem, totalItems }) {
  const location = useLocation();
  const [wasClicked, setWasClicked] = useState(location.pathname);

  useEffect(() => {
    setWasClicked(location.pathname);
  }, [location]);

  return (
    <nav className="flex items-center justify-around h-15 w-full border-b-1 sticky top-0 text-white z-10 bg-[#370202]">
      <div className="flex gap-8 max-[453px]:gap-4">
        <Link to="/" className="flex gap-2">
          <h1
            onClick={() => setWasClicked("/")}
            className={`max-[453px]:text-xs ${
              wasClicked === "/" ? "text-white" : "text-gray-400"
            }`}
          >
            Inicio
          </h1>
        </Link>

        <Link to="/phones" className="flex gap-2">
          <h1
            onClick={() => setWasClicked("/phones")}
            className={`max-[453px]:text-xs ${
              wasClicked === "/phones" ? "text-white" : "text-gray-400"
            }`}
          >
            Celulares
          </h1>
        </Link>

        <Link to="/books" className="flex gap-2">
          <h1
            onClick={() => setWasClicked("/books")}
            className={`max-[453px]:text-xs ${
              wasClicked === "/books" ? "text-white" : "text-gray-400"
            }`}
          >
            Livros
          </h1>
        </Link>
      </div>

      <div>
        <Link to="/car" className="flex gap-2 items-center">
          {tem && (
            <div className="flex justify-center items-center w-4 h-4 bg-red-500 text-xs rounded-full">
              {totalItems}
            </div>
          )}

          <span
            onClick={() => setWasClicked("/car")}
            className={`max-[453px]:text-xs ${
              wasClicked === "/car" ? "text-white" : "text-gray-400"
            }`}
          >
            Carrinho
          </span>

          <img
            onClick={() => setWasClicked("/car")}
            className="w-5"
            src={wasClicked === "/car" ? carr : carGray}
            alt="carrinho"
          />
        </Link>
      </div>
    </nav>
  );
}

export default memo(Header);
