/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] bg-gray-800">
      <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[25px] uppercase text-white mb-[1rem]">
            Gaming
          </h1>
          <p className="text-[14px] text-white opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            dolor, nostrum molestiae magni corporis quae optio id delectus
            eveniet magnam, atque incidunt temporibus asperiores facere.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (+000) 0000 00 000 - info@example.com
          </p>
        </div>
        <div className="mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Informations</h1>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Return Policy</p>
          <p className="footer__link">Shipping Policy</p>
          <p className="footer__link">Dropshipping</p>
        </div>
        <div className="mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track My Orders</p>
        </div>
        <div className="mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Informations</h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">Sale Product</p>
        </div>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">
          &#169; Copyright 2024
        </p>
        <img
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
