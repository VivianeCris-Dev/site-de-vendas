import x from "../assets/x.svg";

function Modal({ show, onClose, selectedCardId, item }) {
  if (!show) return null;

  const card = item.find((item) => item.id === selectedCardId);

  if (!card) return null;

  const hasOffer = card.offer != null;
  const discountedPrice = hasOffer
    ? card.price - (card.price * card.offer) / 100
    : card.price;

  return (
    <div
      className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{card.name}</h1>
          <button onClick={onClose} className="text-gray-700 cursor-pointer">
            <img src={x} alt="x" />
          </button>
        </div>

        <div className="text-grey-700 flex items-center mt-5 justify-center w-full border-t-2 border-gray-300"></div>

        <div className="flex mt-5">
          <div>
            <img
              className="h-20 w-20 object-cover rounded-lg"
              src={card.img}
              alt={card.name}
            />
            {hasOffer && (
              <span className="bg-red-600 text-white text-sm px-3 py-1 rounded">
                -{card.offer}%
              </span>
            )}
          </div>

          <div className="flex flex-col ml-10 max-w-[70%]">
            <strong className="text-gray-500">{card.description}</strong>
            <p className="mt-4 text-gray-500">{card.details}</p>

            {!hasOffer ? (
              <strong className="text-green-300 mt-2">
                {card.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            ) : (
              <div className="flex flex-col mt-2">
                <span className="line-through text-gray-400 text-sm">
                  {card.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>

                <strong className="text-green-300 text-lg">
                  {discountedPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            )}

            <button
              onClick={onClose}
              className="text-gray-700 cursor-pointer bg-black h-9 mt-3 text-white rounded-sm hover:bg-gray-800"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
