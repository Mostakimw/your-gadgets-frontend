"use client";
import assets from "@/assets";
import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LoginPage = () => {
  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Box
            sx={{
              padding: "20px 15px",
              maxWidth: "400px",
              width: "100%",
              height: "full",
              px: 3,
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Login Page
            </Typography>
            <Typography component="p">
              Login to explore more from our site
            </Typography>
            <Box mt={5}>
              <MyForm onSubmit={handleLogin}>
                <Grid container spacing={3}>
                  <Grid item xs={24}>
                    <MyInput
                      type="text"
                      name="email"
                      label="Email:"
                      placeholder="Email"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={24}>
                    <MyInput
                      type="password"
                      name="password"
                      label="Password:"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
                <Stack direction="row" justifyContent="space-between">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                    }}
                  >
                    <Checkbox {...label} />
                    <Typography component="small">Remember me</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component={Link}
                      href="/forgot-password"
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#3B82F6",
                        },
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                  <Button type="submit" sx={{ mt: 2, width: "50%" }}>
                    Login
                  </Button>
                </Box>
              </MyForm>
              {/* dont have an account  */}
              <Box mt={4}>
                <Typography
                  sx={{
                    "& a": {
                      color: "#0066c0",
                    },
                    "& a:hover": {
                      textDecoration: "underline",
                      color: "#0066c0",
                    },
                  }}
                >
                  Don&apos;t Have Account?{" "}
                  <Link href="/register">Create An Account</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* right side */}
          <Box
            sx={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxWidth: "400px",
              width: "100%",
              borderRadius: "0 24px 24px 0",
              overflow: "hidden",
            }}
          >
            <Paper
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Image
                src={assets.loginBg}
                layout="fill"
                objectFit="cover"
                alt="Background Image"
              />
            </Paper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                zIndex: 2,
              }}
            >
              <Image
                src={assets.login}
                height={400}
                width={400}
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
