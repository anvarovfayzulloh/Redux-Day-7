import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Nav = () => {
  const cartItems = useSelector(state => state.cart.products);
  const totalItems = cartItems.reduce((acc, product) => acc + product.quantity, 0); 

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">ShopLogo</Link>
        </div>
        <ul className="flex gap-6 items-center text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="hover:text-yellow-300 transition-colors">
              <AiOutlineShoppingCart size={24} />
            </Link>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
