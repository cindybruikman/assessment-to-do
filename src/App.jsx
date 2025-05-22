import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GlobalStateProvider } from "./GlobalState";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/todo" style={{ marginRight: "1rem" }}>
            Todo
          </Link>
          <Link to="/about">About</Link>
        </nav>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
