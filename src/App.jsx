import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalState";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar"

function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
      <Navbar/>
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
