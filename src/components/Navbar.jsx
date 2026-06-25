import React from 'react'
import Karzinka from "../assets/Karzinka.svg"
import Sertsa from "../assets/Sertsa.svg";
import Qidruv from "../assets/Qidruv.svg"
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { cartCount, wishlistCount } = useCart();

    return (
        <div>
           <div className='fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between border-b border-gray-300 px-20 py-5'>
                <h1 className='font-bold px-5 text-2xl'>Exclusive</h1>
                <div className="flex gap-10">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div className="flex items-center w-[320px] bg-gray-100 px-5 py-3 rounded-lg">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-gray-400"
                    />
                    <img
                        src={Qidruv}
                        alt="Qidiruv"
                        className="w-5 h-5"
                    />
                </div>
                <div className='flex gap-5'>
                    <div className="relative">
                        <img src={Sertsa} alt="Like" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                    <div className="relative">
                        <img src={Karzinka} alt="Karzinka" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar