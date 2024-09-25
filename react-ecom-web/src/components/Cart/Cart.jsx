import { useEffect } from "react";
import { motion } from "framer-motion";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/AppContext";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/Api";
import { useNavigate } from "react-router-dom";

const cartVariants = {
  open: {opacity: 1, x: 0},
  close: {opacity: 0, x: "100%"}
}

const Cart = ({ setIsToggle, isToggle }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_APP_PUBLISHABLE_KEY);

  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="flex justify-end fixed top-0 right-0 w-full h-full z-50">
      <div
        onClick={() => setIsToggle(false)}
        className="bg-opacity relative top-0 left-0 w-[100%] z-30"
      ></div>
      <motion.div
        initial="close"
        animate={isToggle ? "open" : "close"}
        variants={cartVariants}
        className="bg-white w-full sm:w-[350px] md:w-[380px] h-screen
        absolute z-40 flex flex-col"
      >
        <div className="w-[90%] mx-auto flex items-center justify-between h-fit py-4 border-b-2 border-gray-400">
          <span className="font-bold text-[18px]"> SHOPPING CART</span>
          <span
            onClick={() => setIsToggle(false)}
            className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-600"
          >
            <i className="fa-solid fa-x text-[12px]"></i>
            <span>CLOSE</span>
          </span>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center gap-[20px] mt-[100px]">
            <i
              className="fa fa-cart-plus text-[120px] opacity-10"
              aria-hidden="true"
            ></i>
            <span>No Products in the Cart.</span>
            <span onClick={() => {
              navigate("/")
              setIsToggle(false)
            }}
            className="flex bg-custom-gradient text-white font-bold justify-center items-center py-3 px-3 gap-2 hover:cursor-pointer">
              RETURN TO SHOP
            </span>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto ">
              <CartItem />
            </div>
            <div className="w-[90%] mx-auto flex flex-col gap-9 mt-auto mb-5">
              <div className="flex justify-between">
                <h3 className="font-bold">SUBTOTAL</h3>
                <span className="font-bold text-purple">${cartSubTotal}</span>
              </div>
              <span
                onClick={handlePayment}
                className="flex bg-custom-gradient text-white font-extrabold justify-center items-center py-3 w-full gap-2 hover:cursor-pointer"
              >
                CHECKOUT
              </span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
