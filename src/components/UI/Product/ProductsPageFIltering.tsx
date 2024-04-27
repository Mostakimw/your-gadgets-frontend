import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const brands = ["Apple", "Samsung"];

const ProductsPageFIltering = () => {
  return (
    <Stack direction="column" spacing={2} marginBottom={3}>
      <Typography variant="h6">Filter By:</Typography>

      {/* Brand */}
      <FormControl sx={{maxWidth: 150}} >
        <InputLabel id="brand-select-label">Brand</InputLabel>
        <Select labelId="brand-select-label" id="brand-select" label="Brand">
          <MenuItem value="">All Brands</MenuItem>
          {brands.map((brand, index) => (
            <MenuItem key={index} value={brand}>
              <Link
                href={`?brand=${brand}`}
                style={{ width: "100%", display: "block" }}
              >
                {brand}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Category */}
      {/* <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select labelId="category-select-label" id="category-select" label="Category">
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              <Link
                href={`?category=${category}`}
                style={{ width: "100%", display: "block" }}
              >
                {category}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
    </Stack>
  );
};

export default ProductsPageFIltering;
