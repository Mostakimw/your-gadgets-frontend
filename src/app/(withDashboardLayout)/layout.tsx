import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import { Box, Stack } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack direction={{ sm: "column", md: "row" }} gap={4}>
      <Sidebar />
      <Box
        padding={2}
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default layout;
