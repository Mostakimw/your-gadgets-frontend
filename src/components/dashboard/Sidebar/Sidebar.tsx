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
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Stack>
        <Box>
          <Typography component={Link} href="/" fontWeight={600} variant="h4">
            Gadgets{" "}
            <Box component="span" color="primary.main">
              Shine
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
