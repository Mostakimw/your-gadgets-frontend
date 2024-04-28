import { TProduct } from "@/types";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const AllProducts = ({ products }: { products: TProduct[] }) => {
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
              <Typography fontWeight={600}>Code</Typography>
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
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.productName}
              </TableCell>
              <TableCell align="left">{product.category}</TableCell>
              <TableCell align="left">{product.productCode}</TableCell>
              <TableCell align="left">${product.price}</TableCell>
              <TableCell align="left">
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell align="left">
                <DeleteOutlinedIcon sx={{ color: "red" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProducts;
