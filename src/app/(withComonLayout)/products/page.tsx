import ProductCard from "@/components/UI/Product/ProductCard";
import ProductsPageFIltering from "@/components/UI/Product/ProductsPageFIltering";
import SectionTitle from "@/components/UI/SectionTitle";
import { TProduct } from "@/types";
import { Container, Grid, Stack } from "@mui/material";
import React from "react";

interface TSearchParams {
  brand: string;
}

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  let res;
  if (Object.keys(searchParams).length > 0) {
    res = await fetch(
      `http://localhost:5000/api/v1/products?brand=${searchParams?.brand}`
    );
  } else {
    res = await fetch(`${process.env.SERVER_URL}/products`);
  }
  const products = await res.json();

  return (
    <Container sx={{ marginTop: 3 }}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginBottom={4}
      >
        <SectionTitle>All Products</SectionTitle>
      </Stack>

      <>
        <ProductsPageFIltering />
      </>

      {/* all products container */}
      <Stack>
        <Grid container spacing={3}>
          {products.map((product: TProduct) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ProductsPage;
