import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  Menu,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../constants/styles.css";
import { useLocation } from "react-router-dom";

const pages = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/team", label: "Team" },
  { id: 3, path: "/research", label: "Research" },
  { id: 4, path: "/projects", label: "Projects" },
  { id: 5, path: "/funding", label: "Funding" },
  { id: 6, path: "/publication", label: "Publication" },
  { id: 7, path: "/news", label: "News" },
  { id: 8, path: "/video", label: "Videos" },
  { id: 9, path: "/join-us", label: "Join Us" },
  { id: 10, path: "/contact", label: "Contact" },

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
              sx={{width: '20px'}}
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

            <Box
              component="img"
              alt="AiR Lab Logo"
              src={require("../assets/images/airlab-logo.png")}
              sx={{
                height: 56,
                width: "auto",
                objectFit: "contain",
                backgroundColor: "#fff",
                borderRadius: "10px",
                p: "4px",
                mr: { xs: 2, md: 2 },
                mb: { xs: 2, md: 0 },
                mt: { xs: 2, md: 0 },
              }}
            />
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
                target={page.path.startsWith('http') ? "_blank": null}
                rel={page.path.startsWith('http') ? "noopener noreferrer" : null}
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
                    transform:
                      location.pathname === page.path
                        ? "scaleX(1)"
                        : "scaleX(0)", // Active page: underline shown
                    transformOrigin:
                      location.pathname === page.path
                        ? "bottom left"
                        : "bottom right",
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
