import { useContext } from "react";
import { Context } from "../../utils/AppContext";


const CartItem = () => {
  const {cartItems, handleRemoveCart, handleCartProductQuantity} = useContext(Context)

  return (
    <>
    {cartItems.map((item) => (
      <div key={item.id}
      className="w-[90%] mx-auto flex justify-between items-center my-5 hover:cursor-pointer">
        <div className="w-[24%] bg-black bg-opacity-10">
          <img src={import.meta.env.VITE_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt="Earbuds" />
        </div>
        <div className="w-[74%] flex flex-col gap-10 sm:gap-5 md:gap-6">
          <div className="flex gap-2 items-center justify-between">
            <p className="block text-ellipsis whitespace-nowrap overflow-hidden text-[20px] leading-6 font-bold">
              {item.attributes.title}
            </p>
            <i onClick={() => handleRemoveCart(item)}
            className="fa-solid fa-x text-[15px] font-extrabold hover:cursor-pointer hover:text-red-600"></i>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div onClick={() => handleCartProductQuantity("dec", item)}
              className="flex text-[30px] justify-center items-center px-4 py-1 border border-black hover:cursor-pointer hover:text-red-600">
                -
              </div>
              <div className="flex justify-center items-center px-6 py-1 border-t border-b border-black">
                {item.attributes.quantity}
              </div>
              <div onClick={() => handleCartProductQuantity("inc", item)}
              className="flex text-[30px] justify-center items-center px-4 py-1 border border-black hover:cursor-pointer hover:text-green-500">
                +
              </div>
            </div>
            <div className="font-extrabold text-[18px]">
              {item.attributes.quantity} x <span className="text-purple">${item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default CartItem;
