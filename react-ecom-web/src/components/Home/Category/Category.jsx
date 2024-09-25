import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const categoryItems = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const imageVarients = {
    hidden: { opacity: 0, y: 50 },  // Initial state: hidden and moved down
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },  // Final state: visible and moved up
  };

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="w-5/6 mx-auto py-10 md:py-20">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={categoryItems}
      className="w-full flex justify-between items-center h-fit">
        {categories?.data?.map((item) => (
          <motion.div
            className="w-customSmall md:w-customMedium bg-black overflow-hidden"
            variants={imageVarients}
            key={item.id}
            onClick={() => navigate(`/ProdCategory/${item.id}`)}
          >
            <img
              className="w-full transition duration-300 ease transform hover:scale-110"
              src={
                import.meta.env.VITE_APP_DEV_URL +
                item.attributes?.image?.data?.attributes?.url
              }
              alt="image"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
