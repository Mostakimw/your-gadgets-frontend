"use client";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.jpg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const Banner = () => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ marginTop: { xs: 0, md: 4, lg: 2 } }}
      >
        <Grid item md={12} lg={5} sx={{ order: { xs: 2, md: 2, lg: 1 } }}>
          <Typography variant="h4" fontWeight={600} color="body1">
            Crafting Comfort, Redefining Spaces. Home, Your Signature!
          </Typography>
          <Typography component="p" color="secondary.light" my={3}>
            Discover the Latest in Tech Innovation! Elevate Your Digital
            Experience with Cutting-Edge Gadgets. From Smartphones to Wearables,
            Laptops to Cameras, Find Your Perfect Tech Companion Here.
          </Typography>
          <Stack direction="row" gap={2}>
            <Link href="/products">
              <Button sx={{ padding: { xs: "7px 20px", lg: "10px 30px" } }}>
                Shop Now
              </Button>
            </Link>
            <Button variant="outlined" sx={{ padding: "10px 30px" }}>
              Top Rated Items
            </Button>
          </Stack>
        </Grid>
        {/* carousel */}
        <Grid
          item
          xs={12}
          md={12}
          lg={7}
          sx={{
            order: { md: 1, lg: 2 },
            height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
            width: { xs: "90vw", sm: "80vw", md: "70vw", lg: "60vw" },
            marginTop: 5,
            "& .carousel .slide": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // Ensures each slide takes the full height of the container
            },
            "& img": {
              borderRadius: "15px",
              height: "100%", // Ensures the image fills the height of the container
              width: "100%", // Ensures the image fills the width of the container
              objectFit: "cover", // Ensures the image covers the entire container
            },
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
              <Image src={banner2} alt="banner 1" />
            </div>
            <div>
              <Image src={banner1} alt="banner 2" />
            </div>
            <div>
              <Image src={banner2} alt="banner 1" />
            </div>
            <div>
              <Image src={banner1} alt="banner 2" />
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
