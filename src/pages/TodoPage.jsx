import { useGlobalState } from "../GlobalState";
import { GlobalState } from "../GlobalState";
import { useState } from "react";

export default function TodoPage() {
  const { todos = [] } = useGlobalState();
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    GlobalState.set({
      todos: [...todos, { id: Date.now(), text: input, done: false }],
    });
    setInput("");
  };

  const toggleTodo = (id) => {
    GlobalState.set({
      todos: todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    });
  };

  const deleteTodo = (id) => {
    GlobalState.set({
      todos: todos.filter((t) => t.id !== id),
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>TODO List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nieuwe taak..."
      />
      <button onClick={addTodo}>Toevoegen</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Verwijder</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
