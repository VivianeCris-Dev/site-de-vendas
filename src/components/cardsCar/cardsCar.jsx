import trash from "../../assets/trash.svg";

function CardsCar({ car, setCar, handleRemoveCart, handleAddToCart }) {
  const total = car.reduce((acc, item) => acc + item.price * item.quantity, 0);

  function handleFinishPurchase() {
    setCar([]);
  }

  const handleToAdd = (card) => {
    handleAddToCart(card);
  };

  const handleRemove = (id) => {
    setCar((prevCart) => prevCart.filter((card) => card.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-10 w-5/6 text-white h-full max-[817px]:text-xl">
      <div className="flex flex-wrap justify-center items-center gap-10 w-full">
        {car.map((item, index) => (
          <div
            className="flex w-2/3 h-50 items-center border rounded-md hover:scale-101 max-[1035px]:flex-col max-[1035px]:w-56 max-[1035px]:h-95  max-[817px]:w-56"
            key={index}
          >
            <img
              className="w-50 rounded-l-sm h-50 max-[1035px]:w-56 rounded-t-sm"
              src={item.img}
              alt={`imagem de ${item.name}`}
            />
            <div className="flex items-center justify-between p-4 w-full  max-[1035px]:flex-col">
              <div className="flex flex-col">
                <h1 className="mb-1">{item.name}</h1>
                <span className="mb-2 text-gray-400">{item.description}</span>
                <strong className="mb-3 text-green-300">
                  Total:
                  {(item.price * item.quantity).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>

              <div className="flex gap-10">
                <div className="flex items-center justify-center gap-5">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleRemoveCart(item.id)}
                  >
                    -
                  </button>
                  <div className=" flex w-10 h-10 items-center justify-center bg-gray-800">
                    <span>{item.quantity}</span>
                  </div>
                  <buton
                    className="cursor-pointer"
                    onClick={() => handleToAdd(item)}
                  >
                    +
                  </buton>
                </div>

                <button
                  className="cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                >
                  <img src={trash} alt="lixeira" className="w-8" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col items-center justify-center mt-6 p-4 bg-gray-900 rounded-md shadow-md">
        <div className="flex items-center justify-center gap-10 mb-10">
          <h2 className="text-xl font-semibold">Total do Carrinho:</h2>
          <p className="text-green-300 text-2xl mt-2">
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <button
          className="cursor-pointer p-5 border border-yellow-100 text-yellow-100 rounded-sm hover:bg-gray-800 max-[817px]:text-lg max-[400px]:text-base"
          onClick={() => handleFinishPurchase()}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CardsCar;
