import Banner from "@/components/UI/Homepage/Banner/Banner";
import Category from "@/components/UI/Homepage/Category/Category";
import FlashSale from "@/components/UI/Homepage/FlashSale/FlashSale";
import Product from "@/components/UI/Product/Product";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Category />
      <Product />
    </div>
  );
};

export default HomePage;
