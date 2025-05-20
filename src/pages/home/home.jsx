import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Inputs from "../../components/inputs/inputs";
import Cards from "../../components/cards/cards";
import Modal from "../../components/modal/modal";

function Home({ car, setCar, tem }) {
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

  const handleAddToCart = (card) => {
    if (!car.some((item) => item.id === card.id)) {
      setCar([...car, card]);
    }
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
    <div>
      <Modal
        show={showModal}
        onClose={closeModal}
        selectedCardId={selectedCardId}
      />
      <Header tem={tem} />
      <section className="flex flex-col flex-wrap items-center mt-9 w-full h-full text-white">
        <Inputs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Cards
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          car={car}
          openModal={openModal}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
