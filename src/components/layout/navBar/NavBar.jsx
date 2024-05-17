import "./NavBar.css";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const pages = ["Abstracto", "Fotografia", "Pop Art", "Infantil"];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            className="logo"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">THE WALL</Link>
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="categorias"
          >
            {pages.map((page) => (
              <Link key={page} to={`category/${page}`}>
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
