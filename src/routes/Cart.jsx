import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const subtotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="p-6 bg-white shadow-md rounded-lg mt-[10px] mb-[30px]">
        <p className="font-poppins text-lg font-semibold mb-2">Total: ${subtotal.toFixed(2)}</p>
        <p className="font-poppins text-lg font-semibold mb-2">Subtotal: ${total.toFixed(2)}</p>
      </div>
      {products.length !== 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden duration-300 transition-all ">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={product.thumbnail} className="object-contain h-full w-full" alt={product.title} />
                </div>
                <div className="p-4">
                  <p className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                    {product.title.slice(0, 31)}
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
                  <div className="flex items-center justify-center w-full">
                    <button className="active:scale-95 w-[65px] h-[45px] bg-[#2563EB] rounded-l-lg font-poppins text-[20px] text-[#fff]" onClick={() => handleRemoveFromCart(product)}>-</button>
                    <div className="w-full h-[45px] bg-[#2564eb3e] flex items-center justify-center">
                      <p className="font-poppins text-[20px]">{product.quantity}</p>
                    </div>
                    <button className="active:scale-95 w-[65px] h-[45px] bg-[#2563EB] rounded-r-lg font-poppins text-[20px] text-[#fff]" onClick={() => handleAddToCart(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </>
      ) : (
        <p className="font-poppins text-center text-gray-500">No products in cart</p>
      )}
    </div>
  );
};

export default Cart;
