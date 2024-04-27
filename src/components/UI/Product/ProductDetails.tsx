import RatingReact from "react-rating";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { TProduct } from "@/types";
import Image from "next/image";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5}>
          <Box>
            <Image
              src={product?.thumbnail}
              width={500}
              height={500}
              alt={product?.productName}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight={600} color="primary.light">
              {product?.productName}
            </Typography>
            <FavoriteBorderIcon />
          </Stack>

          <Stack direction="row" gap={3} alignItems="center" marginTop={2}>
            <Typography component="h5" fontSize={24} color="secondary.light">
              $450
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ height: "30px" }} />
            <Box>
              <Rating
                name="text-feedback"
                value={product?.rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarBorderOutlinedIcon
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
            </Box>
            <Typography>({product?.numReviews} review)</Typography>
          </Stack>

          <Typography variant="body1" marginTop={3}>
            {product?.description}
          </Typography>

          <Stack direction="row" gap={2} alignItems="center">
            <LocalShippingOutlinedIcon />
            <Typography variant="body1" sx={{ maxWidth: 400 }} my={2}>
              Free worldwide shipping on all orders over $100
            </Typography>
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <CalendarTodayOutlinedIcon />
            <Typography variant="body1" sx={{ maxWidth: 400 }}>
              Delivers in: 3-7 Working Days Shipping & Return
            </Typography>
          </Stack>

          <Stack direction="row" gap={3} marginTop={3}>
            <Button>Buy Now</Button>
            <Button variant="outlined">Add To Cart</Button>
          </Stack>
        </Grid>
      </Grid>
      {/* specifications here */}
      <Box marginTop={10}>
        <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 2 }}>
          Specifications
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 400 }}>
          Explore our vast selection of high-tech gadgets designed to elevate
          your digital lifestyle. From powerful smartphones to sleek laptops,
          immersive audio devices to intuitive smart home solutions, our range
          boasts cutting-edge features, premium craftsmanship, and top-rated
          performance. Stay ahead of the curve and indulge in quality with our
          meticulously curated collection of innovative products tailored to
          meet your every tech need.
        </Typography>
      </Box>
    </>
  );
};

export default ProductDetails;
