import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const pages = ["Abstracto", "Fotografia", "Pop Art", "Ilustracion", "Infantil"];

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
