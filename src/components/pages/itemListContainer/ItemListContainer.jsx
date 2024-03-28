//import "./ItemListContainer.css";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemListContainer = ({ greeting }) => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", p: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={12} sx={{ textAlign: "center" }}>
          <Typography variant="h3">{greeting}</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={60000}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={30000}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={34000}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={100}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
