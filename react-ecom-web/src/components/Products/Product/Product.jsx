import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const prodImageVarients = {
  hidden: { opacity: 0, scale: 0.8 }, // Starts with opacity 0 and moves down
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, // Fades in and moves up
};

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={prodImageVarients}
      onClick={() => navigate(`/SingleProduct/${id}`)}
      className="flex flex-col w-prodSmWidth md:w-prodMdWidth gap-4 mb-[20px]"
    >
      <div
      className="w-full bg-black bg-opacity-10">
        <img
          className="transition duration-300 ease transform hover:scale-110 hover:cursor-pointer"
          src={
            import.meta.env.VITE_APP_DEV_URL +
            data.image?.data[0]?.attributes?.url
          }
          alt="Earbuds"
        />
      </div>
      <div>
        <p
          className="text-[14px] block text-ellipsis whitespace-nowrap overflow-hidden
        md:text-[16px] md:mb-[10px]"
        >
          {data.title}
        </p>
        <h3 className="text-[18px] md:text-[24px]">${data.price}</h3>
      </div>
    </motion.div>
  );
};

export default Product;
