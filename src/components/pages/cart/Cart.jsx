import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Cart = ({ cart, clartCartAlert, deleteById, total }) => {
  return (
    <Grid container margin={5}>
      <Grid item xs={6}>
        <Typography variant="h5" mt={2} sx={{ margin: 5 }}>
          Carrito de compras
        </Typography>
        {cart.length > 0 ? (
          <>
            <TableContainer component={Paper} sx={{ margin: 5 }}>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img
                          src={product.img}
                          alt={product.title}
                          loading="lazy"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Link
                          to={`/itemDetail/${product.id}`}
                          style={{
                            marginLeft: 5,
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          {product.title}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">
                        <DeleteForeverOutlinedIcon
                          onClick={() => deleteById(product.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h6" mt={2} sx={{ margin: 5 }}>
              El total a pagar es ${total}
            </Typography>

            <Button
              onClick={clartCartAlert}
              variant="outlined"
              sx={{ ml: 5, mr: 5 }}
            >
              Vaciar carrito
            </Button>

            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ ml: 5 }}>
                Finalizar compra
              </Button>
            </Link>
          </>
        ) : (
          <Typography align="center" variant="h6" mt={2} sx={{ margin: 5 }}>
            El carrito está vacío.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Cart;
