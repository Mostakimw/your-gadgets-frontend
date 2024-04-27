import { Button, Container, Grid, Stack } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import ProductCard from "../../Product/ProductCard";
import { TProduct } from "@/types";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FlashSaleSection = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
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
          <Button sx={{ borderRadius: 100, padding: "7px 20px" }}>
            View All <ChevronRightIcon />
          </Button>
        </Link>
      </Stack>
      <Grid container spacing={3} marginTop={0}>
        {products.slice(0, 5).map((product: TProduct) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashSaleSection;
