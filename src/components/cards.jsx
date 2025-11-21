import { memo } from "react";

function Cards({ searchTerm, handleAddToCart, openModal, item }) {
  const filteredCards = item.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToAdd = (card) => {
    handleAddToCart(card);
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-10 mt-10 mb-10 w-5/6 max-[817px]:text-xl ">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => {
          const hasOffer = card.offer != null;
          const discountedPrice = hasOffer
            ? card.price - (card.price * card.offer) / 100
            : null;

          return (
            <div
              className="relative flex flex-col w-50 h-83 items-center border rounded-md hover:scale-101 max-[817px]:w-58 max-[817px]:h-85"
              key={card.id}
            >
              {hasOffer && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  -{card.offer}%
                </span>
              )}

              <img
                className="w-full rounded-t-sm h-40"
                loading="lazy"
                src={card.img}
                alt={`imagem de ${card.name}`}
              />
              <div className="flex flex-col p-4">
                <h1 className="mb-1 max-[360px]:text-lg">{card.name}</h1>

                <span className="mb-2 text-gray-300 text-[14px]">
                  {card.description}
                </span>

                {!hasOffer ? (
                  <strong className="mb-3 text-green-300 max-[350px]:text-xs">
                    {card.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                ) : (
                  <div className="mb-3 flex flex-col">
                    <span className="line-through text-gray-400 text-xs max-[350px]:text-xs">
                      {card.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <strong className="text-green-300 text-md max-[350px]:text-base">
                      {discountedPrice.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    className="cursor-pointer p-1 border rounded-sm hover:bg-red-800 max-[350px]:text-base"
                    onClick={() => openModal(card.id)}
                  >
                    Ver mais
                  </button>

                  <button
                    className="cursor-pointer p-1 border rounded-sm hover:bg-red-800 max-[350px]:text-base"
                    onClick={() => handleToAdd(card)}
                  >
                    Carrinho
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default memo(Cards);
