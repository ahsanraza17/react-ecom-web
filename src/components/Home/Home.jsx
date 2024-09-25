import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/Api"
import Banner from "./Banner/Banner"
import Category  from "./Category/Category";
import Products from "../Products/Products"
import { Context } from "../../utils/AppContext";

const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context);
    useEffect(() => {
        getCategories();
        getProducts();
    }, [])

    const getProducts = () => {

        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });

    }

    const getCategories = () => {

        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });

    }

    return(
        <div>
            <Banner />
            <Category categories={categories} />
            <Products products={products} headingText="POPULAR PRODUCTS" />
        </div>
    )
};

export default Home;
