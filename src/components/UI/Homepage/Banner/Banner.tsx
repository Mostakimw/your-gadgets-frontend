"use client";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.jpg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight={600} color="body1">
            Crafting Comfort, Redefining Spaces. Home, Your Signature!
          </Typography>
          <Typography component="p" color="secondary.light" my={3}>
            Crafting Comfort, Redefining Spaces. Your Home, Your Signature
            Style! Crafting Comfort, Redefining Spaces. Your Home, Your
            Signature Style! Crafting Comfort, Redefining Spaces. Your Home,
            Your Signature Style!
          </Typography>
          <Stack direction="row" gap={2}>
            <Button>Shop Now</Button>
            <Button variant="outlined">Top Rated Items</Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            height: "70vh",
            width: "60vw",
            marginTop: 5,
            "& img": { borderRadius: "15px", height: "70vh", width: "100%" },
          }}
        >
          <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
            showThumbs={false}
            showArrows={true}
          >
            <div>
              <Image src={banner1} alt="banner 1" />
            </div>
            <div>
              <Image src={banner2} alt="banner 2" />
            </div>
            <div>
              <Image src={banner1} alt="banner 1" />
            </div>
            <div>
              <Image src={banner2} alt="banner 2" />
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
