import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Inputs from "../components/inputs";
import Cards from "../components/cards";
import Modal from "../components/modal";
import cardBooks from "../../cardsBooks";

function Books({ tem, car, totalItems, handleAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (id) => {
    setSelectedCardId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCardId(null);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="bg-[#370202] min-h-screen w-full flex-col flex">
      <Modal
        item={cardBooks}
        show={showModal}
        onClose={closeModal}
        selectedCardId={selectedCardId}
      />
      <Header tem={tem} car={car} totalItems={totalItems} />
      <section className="flex flex-col flex-wrap items-center mt-9 text-white">
        <Inputs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Cards
          item={cardBooks}
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          openModal={openModal}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Books;
