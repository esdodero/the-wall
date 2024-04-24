import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Link to={`/itemDetail/${id}`}>
      <ImageListItem key={id}>
        <img
          srcSet={`${img}?w=248&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${img}?w=248&h=164&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
        />
      </ImageListItem>
    </Link>
  );
};

export default ProductCard;
