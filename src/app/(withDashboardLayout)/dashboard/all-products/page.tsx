import AllProducts from "@/components/dashboard/AllProducts/AllProducts";

const AllProductsPage = async() => {
  const res = await fetch(`${process.env.SERVER_URL}/products`);
  const products = await res.json();
  return (
    <>
      <AllProducts products={products} />
    </>
  );
};

export default AllProductsPage;
