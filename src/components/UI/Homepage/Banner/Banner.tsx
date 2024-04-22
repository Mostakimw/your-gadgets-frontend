"use client";
import { Carousel } from "react-responsive-carousel";
import { Box, Container, Typography } from "@mui/material";
import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.jpg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Container
      sx={{
        marginTop: 5,
        "& img": { borderRadius: "15px", height: "80vh" },
      }}
    >
      {/* <Box maxWidth={700} mx="auto">
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          color="body1"
          marginBottom={4}
        >
          Crafting Comfort, Redefining Spaces. <br />
          Your Home, Your Signature Style!
        </Typography>
      </Box> */}
      <Carousel autoPlay interval={4000} infiniteLoop>
        <div>
          <Image src={banner1} alt="banner 1" />
        </div>
        <div>
          <Image src={banner2} alt="banner 2" />
        </div>
      </Carousel>
    </Container>
  );
};

export default Banner;
