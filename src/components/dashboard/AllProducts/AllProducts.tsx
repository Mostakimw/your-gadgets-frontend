import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { TProduct } from "@/types";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontWeight={600}>Gadgets Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography fontWeight={600}>Category</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography fontWeight={600}>Price</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography fontWeight={600}>Edit</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography fontWeight={600}>Delete</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: TProduct) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.productName}
              </TableCell>
              <TableCell align="left">{product.productCode}</TableCell>
              <TableCell align="left">${product.price}</TableCell>
              <TableCell align="left">
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell align="left">
                <DeleteOutlinedIcon sx={{color: "red"}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProducts;
