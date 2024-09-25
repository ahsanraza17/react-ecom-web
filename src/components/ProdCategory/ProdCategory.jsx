import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";

const ProdCategory = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="my-[30px] md:my-[75px]">
      <div className="relative text-[24px] md:[34px] font-bold mb-16 w-5/6 mx-auto">
        {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
        <span className="absolute top-0 left-0 w-[50px] h-[3px] mt-[35px] bg-custom-gradient"></span>
      </div>
      <Products innerPage={true} products={data} />
    </div>
  );
};

export default ProdCategory;
