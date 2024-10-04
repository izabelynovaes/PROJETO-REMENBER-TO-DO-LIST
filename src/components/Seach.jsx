import React from "react";

export const Search = ({ search, setSearch }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquisar tarefa..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};
