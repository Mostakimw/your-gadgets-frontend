import assets from "@/assets";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <Box
      sx={{ backgroundColor: "#E7E2FF" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          height: "500px",
          backgroundColor: "white",
          boxShadow: "4px white",
          borderRadius: 3,
        }}
      >
        <Stack direction="row" sx={{ height: "100%" }}>
          <Box
            sx={{
              padding: "20px 15px",
              maxWidth: "400px",
              width: "100%",
              height: "full",
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Login Page
            </Typography>
            <Typography component="p">
              Login to explore more from our site
            </Typography>
          </Box>
          {/* right side */}
          <Box
            sx={{
              backgroundColor: "purple",
              maxWidth: "400px",
              width: "100%",
              borderRadius: "0 24px 24px 0",
              height: "full",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              // sx={{ backgroundColor: "red" }}
            >
              <Image
                src={assets.login}
                height={300}
                width={300}
                alt="Login Image"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
