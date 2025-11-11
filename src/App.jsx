import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
<<<<<<< HEAD
import About from "./pages/Create";
=======
import Products from "./pages/Products";
>>>>>>> b3dbf926d54f2a70665ba77822174f7fbe5b450a
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/create" element={<Create />} />
=======
          <Route path="/products" element={<Products />} />
>>>>>>> b3dbf926d54f2a70665ba77822174f7fbe5b450a
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
