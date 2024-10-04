import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text && category) {
      addTodo(text, category);
      setText("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudo">Estudo</option>
        <option value="Pessoal">Pessoal</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TodoForm;
