import Header from "../../components/header/header";
import CardsCar from "../../components/cardsCar/cardsCar";
import Footer from "../../components/footer/footer";

function Car({ car, setCar, tem }) {
  const handleRemoveCart = (id) => {
    setCar(car.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header tem={tem} car={car} />

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
          />
        )}
        ;
      </div>

      <Footer />
    </div>
  );
}

export default Car;
