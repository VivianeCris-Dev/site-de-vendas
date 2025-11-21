import { useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../components/cards";
import seta from "../assets/seta.svg";
import seta2 from "../assets/seta2.svg";

function CardSlider({
  title,
  span,
  router,
  cards,
  searchTerm,
  handleAddToCart,
  openModal,
}) {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full my-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl ml-10 max-[450px]:text-lg">{title}</h1>
        <button
          className="text-base mr-20 cursor-pointer max-[450px]:text-sm max-[450px]:mr-10"
          onClick={() => navigate(router)}
        >
          {span}
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={scrollLeft} className="cursor-pointer">
          <img src={seta} alt="Seta" className=" hover:scale-103 w-xs" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card) => (
            <Cards
              key={card.id}
              item={[card]}
              searchTerm={searchTerm}
              handleAddToCart={handleAddToCart}
              openModal={openModal}
            />
          ))}
        </div>

        <button onClick={scrollRight} className="cursor-pointer">
          <img src={seta2} alt="Seta" className="hover:scale-103 w-xs" />
        </button>
      </div>
    </div>
  );
}

export default memo(CardSlider);
