import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFetch";

const searchVariants = {
  open: {opacity: 1, y: 0},
  close: {opacity: 0, y: "100%"}
}

const Search = ({ setSearchToggle, searchToggle }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => document.body.classList.remove("overflow-hidden")
  }, [])


  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <motion.div
    initial="close"
    animate={searchToggle ? "open" : "close"}
    variants={searchVariants}
    className="fixed top-0 left-0 w-full h-full z-50 bg-white">
      <div className="w-5/6 mx-auto">
        <header className="flex items-center justify-center py-5">
          <input
            type="text"
            autoFocus
            placeholder="search for products"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            className="text-[20px] sm:text-[30px] md:text-[40px] outline-none uppercase"
          />
        </header>
        <i
          className="fa fa-times hover:cursor-pointer z-10 text-[24px] absolute top-5 sm:top-7 right-8"
          aria-hidden="true"
          onClick={() => setSearchToggle(false)}
        ></i>
        <div className="absolute left-0 top-15 w-full h-[2px] z-[999] bg-gray-300"></div>
        <div className="flex flex-col justify-center items-center my-5">
          {!data && (
            <h3 className="font-bold text-gray-500 text-[12px] sm:text-[15px] md:text-[18px]">
              Start typing to see what you are looking for.
            </h3>
          )}
          {data?.data?.map((item) => (
            <div key={item.id} className="w-2/3 flex flex-col gap-3 mb-2 cursor-pointer"
            onClick={() => {
              navigate("/SingleProduct/" + item.id)
              setSearchToggle(false)
            }}>
              <div className="w-full flex justify-between items-center gap-2">
                <div className="w-[30%] sm:w-[20%] md:w-[8%] bg-cartItemBg">
                  <img src={import.meta.env.VITE_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt={item.attributes.title} />
                </div>
                <div className="w-[70%] sm:w-[80%] md:w-[92%] h-auto flex flex-col items-center">
                  <span className="w-full block text-ellipsis whitespace-nowrap overflow-hidden text-[15px] font-bold">
                    {item.attributes.title}
                  </span>
                  <span className="w-full block text-gray-600 text-ellipsis whitespace-nowrap overflow-hidden text-[12px]">
                    {item.attributes.desc}
                  </span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
