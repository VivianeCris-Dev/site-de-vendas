function Inputs({ searchTerm, setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="buscar">Buscar produtos</label>
      <input
        className="border-gray-500 mt-2 border-1 rounded-sm w-150 p-2 max-lg:w-100 max-sm:w-70"
        value={searchTerm}
        onChange={handleSearch}
        id="buscar"
        name="buscar"
        type="text"
        placeholder="Digite o nome do produto"
      />

      {searchTerm && (
        <a
          onClick={handleClear}
          className="text-gray-500 hover:text-gray-400 cursor-pointer"
        >
          Limpar Busca
        </a>
      )}
    </div>
  );
}

export default Inputs;
