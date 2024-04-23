import { Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../SectionTitle";
import ProductCard from "../../Product/ProductCard";
import { TProduct } from "@/types";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  return (
    <Container
      sx={{
        mt: 12,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SectionTitle>Flash-Sale</SectionTitle>
        <Link href="/flash-sale">
          <Button
            variant="outlined"
            size="small"
          >
            View all
          </Button>
        </Link>
      </Stack>
      <Grid container spacing={3} marginTop={0}>
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashSale;
