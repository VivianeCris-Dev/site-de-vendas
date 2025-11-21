import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Inputs from "../components/inputs";
import Modal from "../components/modal";
import cardBooks from "../../cardsBooks";
import cardPhones from "../../card";
import CardSlider from "../components/cardsSlide";

function Home({ tem, car, totalItems, handleAddToCart, item }) {
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

  const offerCards = item
    .filter((card) => card.offer != null)
    .sort((a, b) => b.offer - a.offer);
  const booksCards = cardBooks.sort((a, b) => (b.offer || 0) - (a.offer || 0));
  const phonesCards = cardPhones.sort(
    (a, b) => (b.offer || 0) - (a.offer || 0)
  );

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
    <div className="flex flex-col bg-[#370202] min-h-screen items-center justify-center">
      <Header tem={tem} car={car} totalItems={totalItems} />
      <Modal
        item={item}
        show={showModal}
        onClose={closeModal}
        selectedCardId={selectedCardId}
      />
      <section className="flex flex-col w-full text-white mt-9 items-center justify-center">
        <Inputs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <CardSlider
          title="Ofertas da Semana"
          cards={offerCards}
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          openModal={openModal}
        />
        <CardSlider
          title="Catálogo de Livros"
          span="Ver mais..."
          router={"/books"}
          cards={booksCards}
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          openModal={openModal}
        />
        <CardSlider
          title="Catálogo de Celulares"
          span="Ver mais..."
          router={"/phones"}
          cards={phonesCards}
          searchTerm={searchTerm}
          handleAddToCart={handleAddToCart}
          openModal={openModal}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
