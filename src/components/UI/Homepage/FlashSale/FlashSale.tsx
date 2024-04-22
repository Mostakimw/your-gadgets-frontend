import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../SectionTitle";
import ProductCard from "../../Product/ProductCard";
import { TProduct } from "@/types";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  console.log(products);
  return (
    <Container
      sx={{
        mt: 12,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SectionTitle>Flash-Sale</SectionTitle>
        <Button variant="outlined">View all</Button>
      </Stack>
      <Grid container spacing={4} marginTop={0}>
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashSale;
