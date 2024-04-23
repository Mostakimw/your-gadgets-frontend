import ProductCard from "@/components/UI/Product/ProductCard";
import SectionTitle from "@/components/UI/SectionTitle";
import { TProduct } from "@/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import EndTimeCounter from "@/components/UI/FlashSale/EndTimeCounter";

const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <Container sx={{ marginTop: 3 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <SectionTitle>Flash Sale</SectionTitle>
        <Box>
          <Stack direction="row" gap={3} alignItems="center">
            <Typography
              sx={{
                backgroundColor: "primary.main",
                padding: "4px 20px",
                borderRadius: "8px",
              }}
              color="white"
            >
              Items for now
            </Typography>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography color="red">Ends in:</Typography>
              <EndTimeCounter />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Grid container spacing={3} marginTop={4}>
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default FlashSalePage;
