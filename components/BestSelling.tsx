import React from "react";
import ProductCard from "./Helper/ProductCard";

const BestSelling = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text[34px] text-white ">
          Best Seller
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-300 ">
          View all products
        </button>
      </div>
      <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ProductCard
            title="Assassian's Creed"
            actualPrice="$60.99"
            discountPrice="$55.99"
            category="shooting"
            image="/images/g5.jpg"
          />
        </div>
        <div data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center">
          <ProductCard
            title="Space Fight"
            actualPrice="$50.99"
            discountPrice="$45.99"
            category="shooting"
            image="/images/g6.jpg"
          />
        </div>
        <div data-aos="fade-left"
          data-aos-delay="500"
          data-aos-anchor-placement="top-center">
          <ProductCard
            title="Super Cars"
            actualPrice="$50.99"
            discountPrice="$45.99"
            category="shooting"
            image="/images/g7.jpg"
          />
        </div>
        <div data-aos="fade-left"
          data-aos-delay="750"
          data-aos-anchor-placement="top-center">
          <ProductCard
            title="Wild Wolf"
            actualPrice="$50.99"
            discountPrice="$45.99"
            category="shooting"
            image="/images/g8.jpg"
          />
        </div>
        <div data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-center">
        <ProductCard
        title="House on fire"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="Action"
        image="/images/g4.jpg"
      />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;