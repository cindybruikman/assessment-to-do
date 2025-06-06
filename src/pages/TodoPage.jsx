import { useGlobalState } from '../context/GlobalState'; 
import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem';
import { ListChecks } from 'lucide-react';

const TodoPage = () => {
  const { todos = [] } = useGlobalState();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <ListChecks className="text-green-600 mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100">My Tasks</h1>
        </div>

        <AddTodoForm />

        <div className="rounded-lg shadow">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-white">
              <p>No tasks yet. Add your first one to get started.</p>
            </div>
          ) : (
            <div>
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
