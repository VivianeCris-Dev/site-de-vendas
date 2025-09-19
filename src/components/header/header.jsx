import carr from "../../assets/carr.svg";
import carGray from "../../assets/cargray.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ tem, totalItems }) {
  const location = useLocation();
  const [wasClicked, setWasClicked] = useState(location.pathname);

  useEffect(() => {
    setWasClicked(location.pathname);
  }, [location]);

  return (
    <div className="flex items-center justify-around h-15 w-full border-b-1 sticky top-0 bg-black text-white z-10">
      <nav>
        <Link to="/" className="flex gap-2" href="#">
          <h1
            onClick={() => setWasClicked("/")}
            className={
              wasClicked === "/"
                ? "text-gray-500 font-mono"
                : "text-white font-mono"
            }
          >
            Catálogo De Vendas
          </h1>
        </Link>
      </nav>

      <nav>
        <Link to="/car" className="flex gap-2" href="#">
          {tem && (
            <div className="flex justify-center items-center w-4 h-4 bg-red-500 text-xs rounded-full">
              {totalItems}
            </div>
          )}
          <span
            onClick={() => setWasClicked("/car")}
            className={wasClicked === "/car" ? "text-gray-500" : "text-white"}
          >
            Carinho
          </span>
          <img
            onClick={() => setWasClicked("/car")}
            className="w-5"
            src={wasClicked === "/car" ? carGray : carr}
            alt="carrinho"
          />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
