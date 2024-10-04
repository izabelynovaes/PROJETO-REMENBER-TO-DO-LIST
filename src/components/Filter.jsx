import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter">
      <select value={filter} onChange={handleFilterChange}>
        <option value="All">Todas</option>
        <option value="Completed">Concluídas</option>
        <option value="Incomplete">Incompletas</option>
      </select>
    </div>
  );
};

export default Filter;
