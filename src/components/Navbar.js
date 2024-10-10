import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "../constants/styles.css";
import { useLocation } from 'react-router-dom';

const pages = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/team", label: "Team" },
  { id: 3, path: "/research", label: "Research" },
  { id: 4, path: "/Publication", label: "Publication" },
  { id: 5, path: "/news", label: "News" },
  { id: 6, path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      className="navbar-container"
      sx={{
        backgroundColor: "rgb(60, 60, 60)",
        color: "white",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "3rem",
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            AIRLAB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Button key={page.id} component={Link} to={page.path}>
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            AIRLAB
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
              key={page.id}
              component={Link}
              to={page.path}
              sx={{
                my: 2,
                display: "block",
                fontWeight: "500",
                fontSize: "1rem",
                textTransform: "none",
                color: location.pathname === page.path ? "primary" : "white",
                mx: 2,
                position: "relative",
                "&:hover": {
                  color: "#1E90FF", 
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#1E90FF", 
                  transform: location.pathname === page.path ? "scaleX(1)" : "scaleX(0)", // Active page: underline shown
                  transformOrigin: location.pathname === page.path ? "bottom left" : "bottom right",
                  transition: "transform 0.3s ease-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              {page.label}
            </Button>
            
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
