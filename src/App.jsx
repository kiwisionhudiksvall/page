import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContent from "./pages/PageContent";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<PageContent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
