"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: 6,
          py: 12,
        }}
      >
        <Box>
          <Typography variant="subtitle1" color="primary">
            404 error
          </Typography>
          <Typography variant="h4" className="mt-3">
            We can’t find that page
          </Typography>
          <Typography variant="body1" className="mt-4">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </Typography>

          <div className="flex items-center mt-6 gap-x-3">
            <Button
              onClick={handleGoBack}
              variant="outlined"
              className="flex items-center justify-center w-1/2 gap-x-2"
            >
              <ArrowBack />
              <span>Go back</span>
            </Button>

            <Button
              href="/"
              variant="contained"
              color="primary"
              className="w-1/2 shrink-0"
            >
              Take me home
            </Button>
          </div>
        </Box>
      </Stack>
    </>
  );
};

export default NotFoundPage;
