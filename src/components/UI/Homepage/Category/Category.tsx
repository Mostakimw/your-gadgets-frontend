import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import { TCategory, TProduct } from "@/types";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Category = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();
  return (
    <Container
      sx={{
        mt: 12,
      }}
    >
      <Box maxWidth={500}>
        <SectionTitle>Top Categories</SectionTitle>
        {/* <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fuga error debitis natus corrupti laboriosam,
        </Typography> */}
      </Box>
      <Grid container spacing={3} marginTop={0} marginBottom={3}>
        {categories.map((category: TCategory) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </Grid>
      <Box textAlign="center">
      <Link href="/products">
          <Button sx={{borderRadius: 100,padding: "7px 20px"}} >
            View All <ChevronRightIcon />
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Category;
