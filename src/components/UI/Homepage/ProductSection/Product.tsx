import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import ProductCard from "../../Product/ProductCard";
import { TProduct } from "@/types";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Product = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/top-products`, {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <Container sx={{ marginTop: 12 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        // alignItems="center"
        marginBottom={2}
      >
        <Box>
          <SectionTitle>Most Trending Products</SectionTitle>
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", sm: "block" }, maxWidth: 500 }}
          >
            Explore Trending Tech: Galaxy Pro Max, EliteBook Pro, Voyager
            Tracker. Stay Ahead with Top-Rated Gadgets!
          </Typography>
        </Box>
        <Link href="/products">
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

export default Product;
