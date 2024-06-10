import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RedeemIcon from "@mui/icons-material/Redeem";
import Badge, { BadgeProps } from "@mui/material/Badge";
import Link from "next/link";
import { theme } from "@/lib/theme/theme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Topbar = () => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" py={1}>
        <Typography
          variant="body1"
          color="white"
          sx={{
            display: "none",
            [theme.breakpoints.up("sm")]: { display: "block" },
          }}
        >
          Hotline: +1234567890
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          sx={{ marginLeft: "auto" }}
        >
          {/* search bar */}
          <Toolbar
            disableGutters
            variant="regular"
            //   sx={{ backgroundColor: "red" }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "white" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
          {/* cart button */}
          <Stack direction="row" alignItems="center" gap={5} ml={2}>
            <Typography title="View Cart" component={Link} href="/cart">
              <StyledBadge badgeContent={1} color="secondary">
                <AddShoppingCartIcon color="secondary" sx={{ fontSize: 40 }} />
              </StyledBadge>
            </Typography>
            <Typography title="View Offers" component={Link} href="/offers">
              <RedeemIcon color="secondary" sx={{ fontSize: 40 }} />
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Topbar;
