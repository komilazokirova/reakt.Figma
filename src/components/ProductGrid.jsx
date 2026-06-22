import React, { useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import gamepadImg from "../assets/Jostik.svg";
import keyboardImg from "../assets/Klawyatura.svg";
import monitorImg from "../assets/Tv.svg";
import chairImg from "../assets/Stul.svg";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: gamepadImg,
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    showAddToCart: false,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: keyboardImg,
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    showAddToCart: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: monitorImg,
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    showAddToCart: false,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: chairImg,
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
    showAddToCart: false,
  },
  {
  id: 5,
  name: "S-Series Comfort Chair",
  image: gamepadImg, 
  price: 375,
  oldPrice: 400,
  rating: 4.5,
  reviews: 99,
  showAddToCart: false,
},
];



const ProductCard = ({ product }) => {
  return (
    <div className="w-64 group mb-10  flex-shrink-0">
      <div className="relative bg-gray-100 h-56 flex items-center justify-center rounded">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />

      
      </div>

      <div className="mt-4">
        <p className="font-medium">{product.name}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-red-500 font-semibold">${product.price}</span>
          <span className="text-gray-400 line-through">${product.oldPrice}</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-end gap-2 px-25 mb-4">
        <button
          onClick={() => scroll("left")}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;