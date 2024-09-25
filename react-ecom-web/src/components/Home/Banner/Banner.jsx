import { styles } from "../../../styles";

const Banner = () => {
    return (
        <>
        <div className="w-full h-fit bg-custom-gradient py-10">
            <div className="w-5/6 flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:gap-20 mx-auto"> 
                <div className="text-animation max-w-[350px] h-[100%] flex flex-col justify-center items-center gap-5 lg:gap-8">
                    <h3 className="text-white font-extrabold text-[40px] sm:text-[60px] md:text-[80px] tracking-wide md:tracking-wider lg:tracking-widest lg:text-[110px] leading-[50px] md:leading-[90px]">
                        SALES
                    </h3>
                    <p className="text-white text-[15px] md:text-[20px]">
                        All Electronics products are available on our store width high qualtiy
                        and with 1 year warantee only on our store. Feel free and check all our 
                        products with extra discount.
                    </p>
                    <div className="flex justify-center items-center gap-5">
                        <div className="py-1 px-2 md:py-2 md:px-3 text-white text-[10px] md:text-[15px] border-2 white hover:cursor-pointer hover:bg-white hover:text-black">READ MORE</div>
                        <div className="py-1 px-2 md:py-2 md:px-3 bg-white text-[10px] md:text-[15px] border-2 white hover:cursor-pointer hover:bg-transparent hover:text-white">SHOP NOW</div>
                    </div>
                </div>
                <img
                src="./src/assets/banner-img.png" alt="Headphones"
                className="w-1/3 banner-image"
                />
            </div>
        </div>
        </>
    )
};

export default Banner;
