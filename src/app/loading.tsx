import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const LoadingPage = () => {
  return (
    <Box>
      <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        width={500}
        height={500}
        alt="loading"
        className="w-96 mx-auto"
      />
    </Box>
  );
};

export default LoadingPage;
