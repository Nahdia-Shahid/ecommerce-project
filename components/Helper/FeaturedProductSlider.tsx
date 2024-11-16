import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FeaturedProductSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="items"
    >
      <ProductCard
        title="Call of Duty"
        actualPrice="$59.99"
        discountPrice="$49.99"
        category="shooting"
        image="/images/g1.jpg"
      />
      <ProductCard
        title="Zoombie"
        actualPrice="$49.99"
        discountPrice="$39.99"
        category="Action"
        image="/images/g2.jpg"
      />
      <ProductCard
        title="Gun of wars"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="shooting"
        image="/images/g3.jpg"
      />
      <ProductCard
        title="House on fire"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="Action"
        image="/images/g4.jpg"
      />
      <ProductCard
        title="Assassian's Creed"
        actualPrice="$60.99"
        discountPrice="$55.99"
        category="shooting"
        image="/images/g5.jpg"
      />
      <ProductCard
        title="Space Fight"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="shooting"
        image="/images/g6.jpg"
      />
      <ProductCard
        title="Super Cars"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="shooting"
        image="/images/g7.jpg"
      />
      <ProductCard
        title="Wild Wolf"
        actualPrice="$50.99"
        discountPrice="$45.99"
        category="shooting"
        image="/images/g8.jpg"
      />

    </Carousel>
  );
};

export default FeaturedProductSlider;
