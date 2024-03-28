import { Typography } from "@mui/material";
const ProductCard = (props) => {
  const { price, title, description } = props;
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Typography avriant="h4">{price}</Typography>
      <img src="" />
    </div>
  );
};

export default ProductCard;
