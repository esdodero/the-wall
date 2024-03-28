import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" showZero={true}>
        <ShoppingCartIcon color="secundary" />
      </Badge>
    </div>
  );
};

export default CartWidget;
