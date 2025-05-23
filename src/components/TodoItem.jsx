import React, { useState, useRef, useEffect } from "react";
import { useGlobalState, GlobalState } from "../context/GlobalState";
import { Check, Trash2, Edit2 } from "lucide-react";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo?.text || "");
  const inputRef = useRef(null);

  const { todos = [] } = useGlobalState();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const updateTodo = (updatedFields) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, ...updatedFields } : t
    );
    GlobalState.set({ todos: updatedTodos });
  };

  const toggleCompleted = () => {
    updateTodo({ completed: !todo.completed });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      updateTodo({ text: editValue });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    GlobalState.set({ todos: updatedTodos });
  };

  return (
    <div
      className={`group flex items-center justify-between p-4 border-b border-gray-100 
        transition-all duration-200 hover:bg-green-950 ${
          todo.completed ? "bg-green-900" : ""
        }`}
    >
      <div className="flex items-center flex-1 min-w-0">
        <button
          onClick={toggleCompleted}
          className={`flex-shrink-0 w-5 h-5 rounded-full border mr-3 flex items-center justify-center
            transition-all duration-200 ${
              todo.completed
                ? "bg-green-600 border-green-600"
                : "border-gray-400 hover:border-green-400"
            }`}
          aria-label={
            todo.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          {todo.completed && <Check size={12} className="text-white" />}
        </button>

        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="flex-1 p-1 border border-green-300 bg-gray-900 text-white rounded focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        ) : (
          <span
            className={`flex-1 truncate ${
              todo.completed ? "text-white line-through" : "text-white"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="mr-2 text-gray-500 hover:text-green-600 transition-colors duration-200"
            aria-label="Edit todo"
          >
            <Edit2 size={16} />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="text-gray-500 hover:text-red-600 transition-colors duration-200"
          aria-label="Delete todo"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
