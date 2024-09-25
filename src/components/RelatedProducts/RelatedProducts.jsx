import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";

const RelatedProducts = ({ productId, categoryId }) => {

  const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
  
  return (
    <div className="my-[30px] md:my-[75px]">
        <Products headingText="RELATED PRODUCTS" products={data} />
    </div>
  );
};

export default RelatedProducts;
