import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";


import { CartProvider } from "./context/CartContext";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
     <CartProvider>
      <Header />
      <div className="flex gap-10 mt-25 items-start">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </div>
     
      </CartProvider>
    </>
  );
}

export default App;