import { Badge } from "@mui/material";
import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary" showZero={true}>
        <ShoppingCartIcon style={{ color: "#ffffff" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
