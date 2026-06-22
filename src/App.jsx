import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FlashSales from './components/FlashSales';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-10 items-start"><Sidebar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </div>
      <FlashSales />
    </>
  );
}

export default App;