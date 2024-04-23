import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Product = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  return (
    <Container sx={{ marginTop: 12 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        // alignItems="center"
        marginBottom={2}
      >
        <Box >
          <SectionTitle>Most Trending Products</SectionTitle>
          <Typography
            variant="body2"
                      sx={{ display: { xs: "none", sm: "block" }, maxWidth: 500 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            fuga error debitis natus corrupti laboriosam debitis natus corrupti
            laboriosam
          </Typography>
        </Box>
        <Link href="/products">
          <Button sx={{ borderRadius: 100, padding: "7px 20px" }}>
            View All <ChevronRightIcon />
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

export default Product;
