import Header from "../../components/header/header";
import CardsCar from "../../components/cardsCar/cardsCar";
import Footer from "../../components/footer/footer";

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
    <div className="flex flex-col min-h-screen">
      <Header tem={tem} totalItems={totalItems} />

      <div className="flex flex-col items-center justify-center  mt-10 mb-10 w-full h-full flex-1">
        {car.length === 0 ? (
          <span className="text-gray-500 h-full">
            Não existe produto no seu carrinho.
          </span>
        ) : (
          <CardsCar
            setCar={setCar}
            car={car}
            handleRemoveCart={handleRemoveCart}
            handleAddToCart={handleAddToCart}
          />
        )}
        ;
      </div>

      <Footer />
    </div>
  );
}

export default Car;
