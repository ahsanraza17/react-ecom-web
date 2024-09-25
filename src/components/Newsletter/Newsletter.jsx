

const Newsletter = () => {
  return (
    <div
      className="bg-custom-gradient w-full h-[300px] md:h-[350px] flex justify-center
        items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4 w-5/6 mx-auto">
        <div className="font-bold text-[20px] text-white">Newsletter</div>
        <div className="font-bold text-[22px] md:text-[28px] leading-[30px] text-white">
          Sign Up for latest update and offer
        </div>
        <div className="flex gap-2">
          <input
            className="p-[4px] outline-none w-[200px] md:w-[300px] md:p-[6px]"
            type="text"
            placeholder="Email Address"
          />
          <div
            className="flex justify-center items-center py-2 px-3 text-white
            border-2 white hover:cursor-pointer hover:bg-white hover:text-black"
          >
            Subscribe
          </div>
        </div>
        <div className="font-bold text-[15px] sm:text-[18px] text-white">
          Will be used in accordance with our privacy policy
        </div>
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/ahsan-raza-5210a4181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img src="./images/linkedin.png" alt="linkedin-logo" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100003586511684&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src="./images/facebook.png" alt="facebook-logo" />
          </a>
          <a href="https://www.instagram.com/ahsan_hafeez1?igsh=bjc0emsweDR5MTV6"
          target="_blank"
          >
          <img src="./images/instagram.png" alt="instagram-logo" />
          </a>
          <img src="./images/twitter.png" alt="twitter-logo" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
