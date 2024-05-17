import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const navigate = useNavigate();

  const clartCartAlert = () => {
    // clearCart()
    Swal.fire({
      title: "Está seguro que quiere vaciar el carrito?",
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: "No, no vaciar",
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "El carrito se encuentra vacío.",
          icon: "success",
          timer: 4000,
        }).then(() => {
          navigate("/");
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "El carrito no se modifico.",
          icon: "info",
          timer: 1500,
        });
      }
    });
  };

  return (
    <Cart
      cart={cart}
      clartCartAlert={clartCartAlert}
      deleteById={deleteById}
      total={total}
    />
  );
};

export default CartContainer;
