import cardPhones from "../../../card.js";
import x from "../../assets/x.svg";

function Modal({ show, onClose, selectedCardId }) {
  if (!show) return null;

  const card = cardPhones.find((item) => item.id === selectedCardId);

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{card.name}</h1>
          <button onClick={onClose} className=" text-gray-700 cursor-pointer">
            <img src={x} alt="x" />
          </button>
        </div>
        <div className="text-grey-700 flex items-center mt-5 justify-center w-full border-t-2 border-gray-300"></div>
        <div className="flex mt-5">
          <img
            className="h-20 w-20 object-cover rounded-lg"
            src={card.img}
            alt={card.name}
          />
          <div className="flex flex-col ml-10">
            <strong className=" text-gray-500">{card.description}</strong>
            <p className="mt-4 text-gray-500">{card.details}</p>
            <strong className="text-green-300 mt-2">
              {card.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <button
              onClick={onClose}
              className="text-gray-700 cursor-pointer bg-black h-9 mt-3 text-white rounded-sm hover:bg-gray-800  "
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
