function CardsCar({ car, handleRemoveCart }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10 w-5/6 text-white h-full max-[817px]:text-xl">
      {car.map((item, index) => (
        <div
          className="flex flex-col w-50 h-80 items-center border rounded-md hover:scale-101 max-[817px]:w-55 max-[817px]:h-85"
          key={index}
        >
          <img
            className="w-full rounded-t-sm h-40"
            src={item.img}
            alt={`imagem de ${item.name}`}
          />
          <div className="flex flex-col p-4">
            <h1 className="mb-1">{item.name}</h1>
            <span className="mb-2 text-gray-400">{item.description}</span>
            <strong className="mb-3 text-green-300">
              {item.price.toFixed(2)}
            </strong>
            <div className="flex gap-3">
              <button
                className="cursor-pointer p-1 border rounded-sm hover:bg-gray-800 max-[817px]:text-lg max-[400px]:text-base"
                onClick={() => handleRemoveCart(item.id)}
              >
                Remover Do Carrinho
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsCar;
