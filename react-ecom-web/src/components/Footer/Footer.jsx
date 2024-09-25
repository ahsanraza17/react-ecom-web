import payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="w-full py-5">
      <div className="w-5/6 justify-center items-center mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between py-2">
          <div className="flex flex-col gap-5 md:gap-10 max-w-[300px]">
            <h4 className="text-[24px] font-bold">About</h4>
            <p className="text-black ">
              Welcome to AHSANSPORDUCTS, your one-stop destination for
              high-quality electronics and gadgets. We pride ourselves on
              offering the latest and greatest in technology, all backed by a
              commitment to quality and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-10 max-w-[300px]">
            <h4 className="text-[24px] font-bold">Contact</h4>
            <div className="flex items-baseline flex-col gap-3 text-black">
              <div className="flex justify-start items-baseline gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  Tariq Road Gulghast colony block #34 karchi company, Karchi
                  Pakistan
                </p>
              </div>
              <div className="flex justify-start items-baseline gap-2">
                <i className="fa-solid fa-mobile-screen"></i>
                <p>phone: 0834 087 5345</p>
              </div>
              <div className="flex justify-start items-baseline gap-2">
                <i class="fa-solid fa-envelope"></i>
                <p>Email: ahsanproducts@gamil.com</p>
              </div>
            </div>
          </div>
          <div className="flex gap-12 md:justify-between">
            <div className="flex flex-col gap-5 md:gap-10">
              <h4 className="text-[24px] font-bold">Categories</h4>
              <div className="flex flex-col gap-3">
                <p className="text-black">Headphones</p>
                <p className="text-black">Smart Watches</p>
                <p className="text-black">Bluetooth Speakers</p>
                <p className="text-black">Wireless Earbuds</p>
                <p className="text-black">Home Theater</p>
                <p className="text-black">Projectors</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <h4 className="text-[24px] font-bold">Pages</h4>
              <div className="flex flex-col gap-3">
                <p className="text-black">Home</p>
                <p className="text-black">About</p>
                <p className="text-black">Privacy Policy</p>
                <p className="text-black">Returns</p>
                <p className="text-black">Terms & Conditions</p>
                <p className="text-black">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-10">
          <div className="text-[10px] md:text-[15px]"> 
            AHSANSTORE 2024 CREATED BY AHSAN HAFEEZ. PRIMEUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img className="" src={payment} alt="payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
