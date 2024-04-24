import { Box, Grid, ImageList } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", p: 10 }}>
      <Grid container spacing={2}>
        <ImageList variant="woven" cols={4} rowHeight={164} gap={5}>
          {items.map(({ id, title, description, price, img }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                description={description}
                price={price}
                img={img}
                id={id}
              />
            );
          })}

          {error && <h2>{error.message}</h2>}
        </ImageList>
      </Grid>
    </Box>
  );
};

export default ItemList;
