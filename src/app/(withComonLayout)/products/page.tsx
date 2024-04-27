import ProductCard from "@/components/UI/Product/ProductCard";
import ProductsPageFIltering from "@/components/UI/Product/ProductsPageFIltering";
import SectionTitle from "@/components/UI/SectionTitle";
import { TProduct } from "@/types";
import { Container, Grid, Stack } from "@mui/material";
import React, { useState } from "react";

const ProductsPage = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
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
