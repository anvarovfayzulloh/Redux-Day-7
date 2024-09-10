import { AiFillStar } from "react-icons/ai";
import React from 'react';
import { useDispatch } from "react-redux";
import { useFetch } from '../hooks/UseFetch';
import { addToCart } from "../store/cartSlice";

const Home = () => {
  const { data } = useFetch('/products?limit=20');
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product, quantity: 1}))
}

  return (
    <div className="container mx-auto p-6">
      {
        data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg duration-300 transition-all hover:scale-105">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={product.thumbnail} className="object-contain h-full w-full" alt={product.title} />
                </div>
                <div className="p-4">
                  <p className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                    {product.title.slice(0, 32)}
                  </p>
                  <p className="text-xl font-bold text-green-500 mb-2">${product.price}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <AiFillStar color="#fbff00" size={24} />
                    <p className="font-medium text-gray-700">{product.rating}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.length > 0 ? (
                      product.tags.map((tag, index) => (
                        <p key={index} className="bg-green-400 text-white font-poppins italic py-1 px-3 rounded-full capitalize">
                          {tag}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-500">No tags</p>
                    )}
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors duration-50 active:bg-[#2564eb3a]" >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-poppins text-center text-gray-500">Loading...</p>
        )
      }
    </div>
  );
};

export default Home;
