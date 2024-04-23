import Banner from "@/components/UI/Homepage/Banner/Banner";
import Category from "@/components/UI/Homepage/Category/Category";
import FlashSale from "@/components/UI/Homepage/FlashSale/FlashSale";


const HomePage = () => {
    return (
      <div>
        <Banner />
        <FlashSale />
        <Category />
      </div>
    );
  };
  
  export default HomePage;
  