import React from "react";
import Image from "next/image"; // Make sure you're using Next.js and importing correctly

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]">
        {/* Notifications Section */}
        <div>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white">
            Get notifications to stay updated
          </h1>
          <p className="text-white text-[17px] mb-[1.5rem] mt-[0.8rem] opacity-70">
            Get a discount on your first purchase
          </p>
          <div className="w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]"
            />
            <button className="w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt=2rem md:mt-0">
          <h1 className="text-[20px] md:text-[25px] lg:text-[30px] leading-[2.4rem] text-white">
            Contact us <br />
            (+000 0000 00 000)
          </h1>
          <p className="text-white opacity-70 mt-[0.5rem]">
            Available 8:00 am - 6:00 pm
          </p>
          <div className="mt-[2rem] flex items-center space-x-2">
            <Image
              width={130}
              height={130}
              className="object-contain"
              alt="playstore"
              src="/images/gp.png"
            />
            <Image
              width={130}
              height={130}
              className="object-contain"
              alt="appstore"
              src="/images/as.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
