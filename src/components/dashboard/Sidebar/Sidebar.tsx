import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "lightgray",
        height: {
          md: "100vh",
        },
        padding: 2,
      }}
    >
      <Stack>
        <Box>
          <Typography fontWeight={600} variant="h4">
            Your{" "}
            <Box component="span" color="primary.main">
              Gadgets
            </Box>
          </Typography>
          <Stack
            marginTop={2}
            sx={{
              "& a:hover": {
                color: "primary.main",
                transition: "ease-in-out 0.6s",
              },
            }}
          >
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              component={Link}
              href="/dashboard/all-products"
            >
              <InventoryOutlinedIcon />
              All Products
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
