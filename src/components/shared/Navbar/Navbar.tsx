"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Topbar from "./Topbar";

interface THamburgerMenuProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const menuItems = (
  <>
    <Typography component={Link} href="/" fontWeight={600}>
      Home
    </Typography>
    <Typography component={Link} href="/products" fontWeight={600}>
      Products
    </Typography>
    <Typography component={Link} href="/flash-sale" fontWeight={600}>
      Flash Sale
    </Typography>
    <Typography component={Link} href="/about-us" fontWeight={600}>
      About
    </Typography>
    <Typography component={Link} href="/contact-us" fontWeight={600}>
      Contact
    </Typography>
    <Typography component={Link} href="/dashboard" fontWeight={600}>
      Dashboard
    </Typography>
    <Typography component={Link} href="/login" fontWeight={600}>
      Login
    </Typography>
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Topbar />
      </Box>
      {/* nav items start */}
      <Box
        sx={{
          // backgroundColor: "red",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "8px 0",
            }}
          >
            <Box component={Link} href="/">
              <Typography fontWeight={600} variant="h4">
                Gadgets{" "}
                <Box component="span" color="primary.main">
                  Shine
                </Box>
              </Typography>
            </Box>
            <Stack
              direction="row"
              gap={4}
              alignItems="center"
              sx={{
                "& a:hover": {
                  color: "primary.main",
                  transition: "ease-in-out 0.6s",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {/* menu items */}
              {menuItems}
            </Stack>
            {/* Hamburger Menu */}
            <Hidden lgUp>
              <HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
            </Hidden>
          </Stack>
        </Container>
      </Box>
      {/* Drawer for Hamburger Menu */}
      <Hidden lgUp>
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  "& a:hover": {
                    color: "primary.main",
                    transition: "ease-in-out 0.6s",
                  },
                }}
              >
                {/* menu items */}
                {menuItems}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </Stack>
  );
};

// Hamburger Menu
const HamburgerMenu = ({ handleDrawerOpen }: THamburgerMenuProps) => {
  return (
    <IconButton
      sx={{ display: { md: "block", lg: "none" } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default Navbar;
