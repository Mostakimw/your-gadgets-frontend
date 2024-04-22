import Banner from "@/components/UI/Homepage/Banner/Banner";
import FlashSale from "@/components/UI/Homepage/FlashSale/FlashSale";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FlashSale />
      <Footer />
    </div>
  );
};

export default HomePage;
