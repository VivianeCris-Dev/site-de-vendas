import Header from "../components/header";
import CardsCar from "../components/cardsCar";
import Footer from "../components/footer";
import cardPhones from "../../card";

function Car({ car, setCar, tem, totalItems, handleAddToCart }) {
  const handleRemoveCart = (id) => {
    setCar((prevCart) => {
      const item = prevCart.find((p) => p.id === id);
      if (!item) return prevCart;

      if (item.quantity > 1) {
        return prevCart.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        return prevCart.filter((p) => p.id !== id);
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#370202]">
      <Header tem={tem} totalItems={totalItems} />

      <div className="flex flex-col items-center justify-center  mt-10 mb-10 w-full h-full flex-1">
        {car.length === 0 ? (
          <span className="text-white h-full">
            Não existe produto no seu carrinho.
          </span>
        ) : (
          <CardsCar
            item={cardPhones}
            setCar={setCar}
            car={car}
            handleRemoveCart={handleRemoveCart}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Car;
