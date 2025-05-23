import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-black text-white mb-4 uppercase
"
          >
            Welcome to your Task Manager
          </h1>
          <p className="text-xl text-white">
            This application was built for an assessment project.
          </p>
        </div>

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
