import Product from "./Product/Product";
import { motion } from "framer-motion";

const productVarients = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="w-5/6 mx-auto pb-10 md:pb-20">
    {!innerPage && <div className="relative text-[18px] md:text-[24px] font-bold mb-10 md:mb-20">
      {headingText}
      <span className="absolute top-0 left-0 w-[50px] h-[3px] mt-[30px] bg-custom-gradient"></span>
    </div>}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={productVarients}
      className="flex flex-wrap gap-[7px] md:gap-[13px]">
        {products?.data?.map((elem) => (
          <Product key={elem.id} id={elem.id} data={elem.attributes}/>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
