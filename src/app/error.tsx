"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={4}
      justifyContent="center"
      marginTop={4}
    >
      <Typography
        sx={{
          border: "2px solid red",
          padding: "10px",
          maxWidth: "fit-content",
          borderRadius: 2,
          fontSize: "24px",
        }}
      >
        Something went wrong!
      </Typography>
      <Typography
        sx={{
          border: "2px solid red",
          padding: "10px",
          maxWidth: "fit-content",
          borderRadius: 2,
          fontSize: "24px",
        }}
      >
        {error.message}
      </Typography>
      <Box>
        <Button onClick={() => reset()}>Try Again</Button>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
