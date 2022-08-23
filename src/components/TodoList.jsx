// this is the todolist thinggy

import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <p>This is my List of Todos</p>
        <TodoForm onSubmit={addTodo} />
        <div>
          {todos.map((item) => {
            return <li>{item.text}</li>;
          })}
        </div>
      </div>
    </>
  );
}
