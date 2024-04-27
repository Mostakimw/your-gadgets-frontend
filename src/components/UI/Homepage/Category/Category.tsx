import { Box, Button, Container, Grid } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import { TCategory } from "@/types";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
  {
    id: "1",
    name: "Smartphones",
    icon: "https://cdn-icons-png.flaticon.com/128/3437/3437364.png",
  },
  {
    id: "2",
    name: "Laptops",
    icon: "https://cdn-icons-png.flaticon.com/128/610/610021.png",
  },
  {
    id: "3",
    name: "Audio",
    icon: "https://cdn-icons-png.flaticon.com/128/3213/3213211.png",
  },
  {
    id: "4",
    name: "Smart Home",
    icon: "https://cdn-icons-png.flaticon.com/128/2640/2640516.png",
  },
  {
    id: "5",
    name: "Action Cameras",
    icon: "https://cdn-icons-png.flaticon.com/128/1042/1042390.png",
  },
  {
    id: "6",
    name: "VR Headsets",
    icon: "https://cdn-icons-png.flaticon.com/128/2177/2177275.png",
  },
];

const Category = async () => {
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
          <Button sx={{ borderRadius: 100, padding: "7px 20px" }}>
            View All <ChevronRightIcon />
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Category;
