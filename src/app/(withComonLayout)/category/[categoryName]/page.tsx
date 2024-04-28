import ProductCard from "@/components/UI/Product/ProductCard";
import SectionTitle from "@/components/UI/SectionTitle";
import { TProduct } from "@/types";
import { Container, Grid, Stack } from "@mui/material";

type TCategoryName = {
  params: { categoryName: string };
};
const SingleCategoryPage = async ({ params }: TCategoryName) => {
  const categoryName =
    params.categoryName.charAt(0).toUpperCase() + params.categoryName.slice(1);
  const res = await fetch(
    `${process.env.SERVER_URL}/products?category=${categoryName}`
  );
  const products = await res.json();

  return (
    <Container sx={{ marginTop: 3 }}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <SectionTitle>{categoryName}</SectionTitle>
      </Stack>
      <Grid container spacing={3} marginTop={4}>
        {products.map((product: TProduct) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Grid>
    </Container>
  );
};

export default SingleCategoryPage;
