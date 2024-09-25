import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom"
import { Context } from "../../utils/AppContext";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const {id} = useParams();
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const {handleAddCart} = useContext(Context);
  
  if(!data) return;
  const product = data.data[0].attributes;


  const increaseQuantity = () => {
    setQuantity(preQuantity => preQuantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity (preQuantity => preQuantity - 1)
    }
  }
 
  return (
    <>
      <div className="w-5/6 mx-auto my-[30px] md:my-[75px]">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="mx-auto w-2/3 sm:w-2/4 md:w-productWidth bg-black bg-opacity-10 flex items-center">
            <img src={import.meta.env.VITE_APP_DEV_URL + product.image.data[0].attributes.url} alt="Earbuds" />
          </div>
          <div className="md:w-productWidth flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-[18px] md:text-[24px] font-bold"> 
                {product.title}
              </h3>
              <h2 className="text-[20px] md:text-[25px] font-bold">${product.price}</h2>
              <p className="text-[10px] md:text-[12px] lg:text-[15px] text-description">
                {product.desc}
              </p>
            </div>
            <div className="flex gap-1">
              <div className="flex">
                <div onClick={decreaseQuantity}
                className="flex text-[20px] justify-center items-center px-4 border border-black hover:cursor-pointer leading-3">
                  -
                </div>
                <div className="flex justify-center items-center px-6 border-t border-b border-black">
                  {quantity}
                </div>
                <div onClick={increaseQuantity}
                className="flex text-[20px] justify-center items-center px-4 border border-black hover:cursor-pointer">
                  +
                </div>
              </div>
              <div className="flex bg-custom-gradient text-white justify-center items-center py-3 px-3 gap-2 hover:cursor-pointer">
                <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-white"></i>
                <div onClick={() => {
                  handleAddCart(data.data[0], quantity);
                  setQuantity(1);
                }}
                className="font-bold">ADD TO CART</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-1">
                <div className="font-bold">Category:</div>
                <div className="text-gray-500">{product.categories.data[0].attributes.title}</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="font-bold">Share:</div>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-[20px] h-[20px] bg-black rounded-full"
                    src="/images/facebook.png"
                    alt="facebook"
                  />
                  <img
                    className="w-[20px] h-[20px] bg-black rounded-full"
                    src="/images/instagram.png"
                    alt="instagram"
                  />
                  <img
                    className="w-[20px] h-[20px] bg-black rounded-full"
                    src="/images/linkedin.png"
                    alt="linkedin"
                  />
                  <img
                    className="w-[20px] h-[20px] bg-black rounded-full"
                    src="/images/twitter.png"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts productId={id} categoryId={product.categories.data[0].id}/>
    </>
  );
};

export default SingleProduct;