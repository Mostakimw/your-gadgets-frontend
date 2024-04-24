import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const ProductDetailsPage = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h4">Images Here</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight={600} color="primary.light">
              Apple 15 Pro Max
            </Typography>
            <FavoriteBorderIcon />
          </Stack>

          <Stack direction="row" gap={3} alignItems="center" marginTop={2}>
            <Typography component="h5" fontSize={24} color="secondary.light">
              $450
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ height: "30px" }} />
            <Typography>Review</Typography>
            <Typography>(30 review)</Typography>
          </Stack>

          <Typography variant="body1" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ut!
            Perferendis, est esse tempora adipisci, explicabo quaerat voluptatum
            nihil consequuntur qui alias quis veritatis quasi a facere nisi.
            Aliquid molestiae beatae esse corporis quibusdam officiis iusto et
            incidunt animi porro.
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
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          Specifications
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
          dicta distinctio fugit non ad expedita illum, est nam vero?
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
