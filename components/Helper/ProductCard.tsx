/* eslint-disable @next/next/no-img-element */
import {
    HeartIcon,
    ShoppingBagIcon,
    StarIcon,
  } from "@heroicons/react/24/solid"; // Corrected import path to `24` for Heroicons
  import React from "react";
  
  interface Props {
    image: string;
    category: string;
    title: string;
    discountPrice: string;
    actualPrice: string;
  }
  
  const ProductCard: React.FC<Props> = ({
    image, // Added this to the destructuring
    title,
    category,
    actualPrice,
    discountPrice,
  }: Props) => {
    return (
      <div className="bg-gray-900 p-4 rounded-md">
        <div className="w-full h-[200px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover md:w-[90%] md:h-[90%]"
          />
        </div>
        <div className="mt-[1rem] w-full md:w-[90%]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-white opacity-70">{category}</p>
            <HeartIcon className="w-[1rem] h-[1rem] text-gray-500" />
          </div>
          <h1 className="mt-[0.3rem] font-bold text-white opacity-85">{title}</h1>
          <div className="mt-[0.3rem] flex items-center">
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
          </div>
          <div className="mt-[0.3rem] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <p className="text-[15px] line-through text-white opacity-60">
                {actualPrice}
              </p>
              <p className="text-[16px] text-white opacity-75">{discountPrice}</p>
            </div>
            <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-orange-400" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  