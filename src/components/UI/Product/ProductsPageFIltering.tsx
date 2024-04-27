"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import FilterByPrice from "./Filter/FilterByPrice";
import Link from "next/link";
import { useState } from "react";

const ProductsPageFIltering = () => {
  
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6">Filter By:</Typography>

      {/* Price Range */}
      {/* <FilterByPrice /> */}

      {/* Brand */}
      <FormControl fullWidth>
        <InputLabel id="brand-select-label">Brand</InputLabel>
        <Select
          labelId="brand-select-label"
          id="brand-select"
          label="Brand"
        >
          <MenuItem value="">All Brands</MenuItem>
          <Link href='?brand=Apple'><MenuItem value="Apple">Apple</MenuItem></Link>
          

         
        </Select>
      </FormControl>

      {/* Category */}
      {/* <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select labelId="category-select-label" id="category-select">
          <MenuItem value="">All Categories</MenuItem>
        </Select>
      </FormControl> */}

      {/* Sort By Rating */}
      {/* <FormControl fullWidth>
        <InputLabel id="rating-sort-label">Sort By Rating</InputLabel>
        <Select labelId="rating-sort-label" id="rating-sort">
          <MenuItem value="highest-rated">Highest Rated</MenuItem>
          <MenuItem value="lowest-rated">Lowest Rated</MenuItem>
        </Select>
      </FormControl> */}
    </Stack>
  );
};

export default ProductsPageFIltering;
