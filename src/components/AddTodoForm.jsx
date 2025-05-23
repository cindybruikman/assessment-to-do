import React, { useState } from "react";
import { useGlobalState, GlobalState } from "../context/GlobalState";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const global = useGlobalState();
  const todos = global?.todos || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: title.trim(),
      completed: false,
    };

    GlobalState.set({
      todos: [...todos, newTodo],
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-3 border border-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-900 text-white"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white p-3 border border-green-600 rounded-r-full transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
