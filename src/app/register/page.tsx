"use client";
import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const RegisterPage = () => {
  const handleRegister = (data: FieldValues) => {
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
          backgroundColor: "white",
          boxShadow: "4px white",
          borderRadius: 3,
          maxWidth: 400,
          width: "100%",
          padding: "10px 20px",
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Box
            sx={{
              padding: "20px 15px",
              px: 3,
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              Create Account
            </Typography>
            <Typography component="p" mt={1}>
              Create an account to see the magic of our website
            </Typography>
            <Box mt={3}>
              <MyForm onSubmit={handleRegister}>
                <Grid container spacing={3}>
                  <Grid item xs={24}>
                    <MyInput
                      type="text"
                      name="name"
                      labelText="Name:"
                      fullWidth={true}
                      placeholder="First and last name"
                    />
                  </Grid>
                  <Grid item xs={24}>
                    <MyInput
                      type="text"
                      name="email"
                      labelText="Email:"
                      fullWidth={true}
                      placeholder="Type your email"
                    />
                  </Grid>
                  <Grid item xs={24}>
                    <MyInput
                      type="password"
                      name="password"
                      labelText="Password:"
                      fullWidth={true}
                      placeholder="At least 6 character"
                    />
                  </Grid>
                  <Grid item xs={24}>
                    <MyInput
                      type="password"
                      name="confirmPassword"
                      labelText="Re-enter Password:"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <Button type="submit" sx={{ mt: 3, width: "100%" }}>
                    Continue
                  </Button>
                </Box>
              </MyForm>
              {/* already have an account  */}
              <Stack direction="row" mt={4}>
                <Typography
                  variant="body2"
                  sx={{
                    "& a": {
                      color: "#0066c0",
                    },
                    "& a:hover": {
                      textDecoration: "underline",
                      color: "primary.main",
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  Already Have an Account?{" "}
                  <Typography
                    component={Link}
                    href="/register"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="body2"
                      component={Link}
                      href="/register"
                    >
                      Login
                    </Typography>
                    <ArrowRightIcon fontSize="small" />
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default RegisterPage;
