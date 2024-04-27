import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";

const AllProducts = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <>
      <Grid container spacing={3}>
        {products.map((product: TProduct) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Grid>
    </>
  );
};

export default AllProducts;
