import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { CheckCircle } from "lucide-react";

const HomePage = () => {
  const { todos = [] } = useGlobalState();

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-black text-white mb-4 text-transform: uppercase
"
          >
            Welcome to this to-do application
          </h1>
          <p className="text-xl text-white">
            This application is made for an assessment.
          </p>
        </div>

        {/* Info Card */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="green-600 mr-2" size={28} />
            <h2 className="text-2xl font-semibold text-gray-800">
              Get Organized
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            TaskMaster helps you organize your tasks in a simple, intuitive way.
            Add new tasks, mark them as complete, edit or delete them as needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-md border border-green-100">
              <h3 className="font-medium text-green-800 mb-2">Your Tasks</h3>
              <p className="text-gray-700">
                You have {todos.length} total tasks
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Progress</h3>
              <p className="text-gray-700">
                {completedTodos} completed, {pendingTodos} pending
              </p>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/todo"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-colors duration-200"
          >
            Go to My Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
