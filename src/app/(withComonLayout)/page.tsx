import Banner from "@/components/UI/Homepage/Banner/Banner";
import Category from "@/components/UI/Homepage/Category/Category";
import FlashSaleSection from "@/components/UI/Homepage/FlashSaleSection/FlashSaleSection";
import Product from "@/components/UI/Homepage/ProductSection/Product";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSaleSection />
      <Category />
      <Product />
    </div>
  );
};

export default HomePage;
