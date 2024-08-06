import { Box, Grid, Link, Typography, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
("");
function Header() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const directLogin = () => {
    navigate("/login");
  };
  return (
    <header
      style={{
        backgroundColor: "#f0f2ee",
        marginTop: "-0.5%",
        width: "99vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      <Box
        sx={{
          paddingY: 2,
          borderBottom: "1px solid #6c757d",
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#f0f2ee",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        }}>
        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Grid container spacing={5} alignItems="center" ml={10}>
            <Grid item xs={6}>
              <Grid container spacing={5} alignItems="center">
                <Grid item mt={2}>
                  <Link href="/">
                    <img
                      src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
                      alt="logo"
                    />
                  </Link>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/" sx={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#525258",
                        "&:hover": { color: "#dc3545" },
                      }}>
                      Home
                    </Typography>
                  </Link>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/shop" sx={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#525258",
                        "&:hover": { color: "#dc3545" },
                      }}>
                      Shop
                    </Typography>
                  </Link>
                </Grid>
                <Grid item mt={2}>
                  <Link href="/about" sx={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#525258",
                        "&:hover": { color: "#dc3545" },
                      }}>
                      About Us
                    </Typography>
                  </Link>
                </Grid>
                <Grid item mt={2}>
                  <Link
                    href="#"
                    onMouseEnter={handleMouseEnter}
                    sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#525258",
                        "&:hover": { color: "#dc3545" },
                      }}>
                      Pages
                    </Typography>
                  </Link>
                  <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMouseLeave}
                    MenuListProps={{
                      onMouseEnter: () => setMenuOpen(true),
                      onMouseLeave: handleMouseLeave,
                    }}>
                    <MenuItem onClick={handleMouseLeave}>Page 1</MenuItem>
                    <MenuItem onClick={handleMouseLeave}>Page 2</MenuItem>
                    <MenuItem onClick={handleMouseLeave}>Page 3</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} mt={6}>
              <Grid container spacing={5} mt={-4}>
                <Search
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "30px",
                    width: "45%",
                  }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Grid mt={1} spacing={10} ml={10}>
                  <Link href="/login" sx={{ textDecoration: "none" }}>
                    <VscAccount
                      onClick={directLogin}
                      style={{
                        marginTop: "2px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#525258",
                        transition: "color 0.3s, font-weight 0.3s",
                      }}
                    />
                  </Link>
                </Grid>
                <Grid mt={1} spacing={10} ml={3}>
                  <Link href="/wishlish" sx={{ textDecoration: "none" }}>
                    <FaRegHeart
                      style={{
                        marginTop: "2px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#525258",
                        transition: "color 0.3s, font-weight 0.3s",
                      }}
                    />
                  </Link>
                </Grid>
                <Grid mt={1} spacing={10} ml={3}>
                  <Link href="/cart" sx={{ textDecoration: "none" }}>
                    <IoCartOutline
                      style={{
                        marginTop: "2px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#525258",
                        transition: "color 0.3s, font-weight 0.3s",
                      }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}

export default Header;
