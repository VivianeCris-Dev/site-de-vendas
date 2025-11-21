import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Inputs from "../components/inputs";
import Cards from "../components/cards";
import Modal from "../components/modal";
import cardPhones from "../../card";

function Phones({ tem, car, totalItems, handleAddToCart }) {
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
    <div className="bg-[#370202] min-h-screen">
      <Modal
        item={cardPhones}
        show={showModal}
        onClose={closeModal}
        selectedCardId={selectedCardId}
      />
      <Header tem={tem} car={car} totalItems={totalItems} />
      <section className="flex flex-col flex-wrap items-center mt-9 w-full h-full text-white">
        <Inputs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Cards
          item={cardPhones}
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          openModal={openModal}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Phones;
