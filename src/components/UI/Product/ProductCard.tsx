import { TProduct } from "@/types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = async ({ product }: { product: TProduct }) => {
  const discountPrice = (
    product.price -
    product.price * (product.discount / 100)
  ).toFixed(2);
  return (
    <Grid item xs={12} sm={6} md={4} lg={2.4}>
      <Card
        sx={{
          height: "380px",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            src={product?.thumbnail}
            width={300}
            height={50}
            alt="product image"
          />
          <Box>
            <Typography
              variant="body2"
              color="white"
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                backgroundColor: "primary.main",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              -{product.discount}%
            </Typography>
          </Box>
        </Box>

        <CardContent
          style={{
            paddingBottom: "10px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product?.productName}
          </Typography>

          {/* product price and add to cart btn */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              bottom: 5,
              left: 0,
              padding: "0 16px",
              zIndex: 1000,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" gap={1}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textDecoration: "line-through" }}
                >
                  ${product?.price}
                </Typography>
                <Typography variant="body2">${discountPrice}</Typography>
              </Stack>
              <CardActions
                sx={{
                  padding: "2px 0",
                }}
              >
                <Button size="small" title="Add To Cart">
                  <AddShoppingCartIcon></AddShoppingCartIcon>
                </Button>
              </CardActions>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
