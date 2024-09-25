import { useState, useEffect, useContext, act } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/AppContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const {cartItems} = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-[60px] sm:h-[80px] bg-black flex justify-center items-center py-5 ${
          scrolled ? "sticky top-0 z-50 animate-stickyNav" : ""
        }`}
      >
        <div className="flex justify-between items-center w-5/6 mx-auto">
          <ul className="list-none hidden md:flex flex-row gap-4 text-gray-400 font-extrabold">
            <li onClick={() => {
              navigate("/")
            }}
            className="hover:text-white cursor-pointer">HOME</li>
            <li className="hover:text-white cursor-pointer">ABOUT</li>
            <li className="hover:text-white cursor-pointer">CATEGORIES</li>
          </ul>
          <div onClick={() => navigate("/")}
          className="text-[20px] sm:text-[25px] text-white font-extrabold cursor-pointer">
            AHSANPRODUCTS.
          </div>
          <div className="flex justify-center items-center text-grey gap-4">
            <i className="fa-solid fa-magnifying-glass cursor-pointer hover:text-white"
            onClick={() => setSearchToggle(true)}
            ></i>
            <i className="fa-regular fa-heart cursor-pointer hover:text-white"></i>
            <span className="relative">
              <i onClick={() => setIsToggle(true)} 
              className="fa-solid fa-cart-shopping cursor-pointer hover:text-white"></i>
              {cartItems.length > 0 && (
              <span
                className="w-5 h-5 flex justify-center items-center bg-Notification
                rounded-full text-white absolute bottom-4 left-4 text-[13px]"
              >
                {cartItems.length}
              </span>
              )}
            </span>
          </div>
        </div>
      </nav>
      {isToggle && <Cart setIsToggle={setIsToggle} isToggle={isToggle} />}
      {searchToggle && <Search setSearchToggle={setSearchToggle} searchToggle={searchToggle} />}
    </>
  );
};

export default Header;
