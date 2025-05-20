import cardPhones from "../../card.js";

function Cards({ searchTerm, handleAddToCart, car, openModal }) {
  const filteredCards = cardPhones.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isInCart = (cardId) => {
    return car.some((item) => item.id === cardId);
  };

  const handleToAdd = (card) => {
    handleAddToCart(card);
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-10 mt-10 mb-10 w-5/6 max-[817px]:text-xl ">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <div
            className="flex flex-col w-50 h-80 items-center border rounded-md hover:scale-101 max-[817px]:w-56 max-[817px]:h-85"
            key={card.id}
          >
            <img
              className="w-full rounded-t-sm h-40"
              src={card.img}
              alt={`imagem de ${card.name}`}
            />
            <div className="flex flex-col p-4">
              <h1 className="mb-1">{card.name}</h1>
              <span className="mb-2 text-gray-400">{card.description}</span>
              <strong className="mb-3 text-green-300">
                {card.price.toFixed(2)}
              </strong>
              <div className="flex gap-3">
                <button
                  className="cursor-pointer p-1 border rounded-sm hover:bg-gray-800"
                  onClick={() => openModal(card.id)}
                >
                  Ver mais
                </button>

                {!isInCart(card.id) ? (
                  <button
                    className="cursor-pointer p-1 border rounded-sm hover:bg-gray-800"
                    onClick={() => handleToAdd(card)}
                  >
                    Carrinho
                  </button>
                ) : (
                  <button
                    className="cursor-pointer p-1 border rounded-sm bg-gray-500 text-white"
                    disabled
                  >
                    Pronto
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default Cards;
