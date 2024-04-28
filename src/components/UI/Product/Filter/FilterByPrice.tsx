import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FormEvent } from "react";

const priceRanges = [
  { label: "$100 to $200", value: [100, 200] },
  { label: "$299 to $399", value: [299, 399] },
  // Add more price ranges as needed
];

const FilterByPrice = () => {
  const handleChange = (event: { target: { value: any; }; }) => {
    const selectedIndex = event.target.value;
    const selectedPriceRange = priceRanges[selectedIndex].value;
    console.log(selectedPriceRange);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="brand-select-label">Select Price Range</InputLabel>
      <Select
        labelId="brand-select-label"
        id="brand-select"
        label="Brand"
        onChange={handleChange}
      >
        <MenuItem value="">All Price Ranges</MenuItem>
        {priceRanges.map((range, index) => (
          <MenuItem key={index} value={index}>
            {range.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterByPrice;
