import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import { Search } from "./components/Seach";

function App() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app-list">
      <div className="app-2">
        <h1>Crie sua Tarefa</h1>
      <TodoForm addTodo={addTodo} />
      </div>
       <div className="app">
      <Link to="/" className="back-button">
        Voltar
      </Link>

      <h1>Lista de Tarefa</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {todos.length === 0 ? (
          <p>Nenhuma tarefa encontrada. Adicione uma nova tarefa!</p>
        ) : (
          todos
            .filter((todo) => {
              if (filter === "" || filter === "All") {
                return true;
              } else if (filter === "Completed") {
                return todo.isCompleted;
              } else if (filter === "Incomplete") {
                return !todo.isCompleted;
              }
              return true;
            })
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))
        )}
      </div>
    </div>
    </div>
   
  );
}

export default App;
