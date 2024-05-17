import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let total = getTotalPrice();
  const [orderId, setOrderId] = useState(null);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: (data) => {
      const { confirmarContraseña, ...buyerData } = data;
      let obj = {
        buyer: buyerData,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, obj)
        .then((res) => setOrderId(res.id))
        .catch((error) =>
          Swal.fire({
            position: "center",
            icon: "error",
            title:
              "Hubo un error al realizar la compra. Por favor vuelva a inentarlo. Gracias!",
            showConfirmButton: false,
          })
        );

      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });

      clearCart();
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Ingrese el nombre")
        .min(3, "Minimo 3 letras"),
      apellido: Yup.string()
        .required("Ingrese el apellido")
        .min(3, "Minimo 3 letras"),
      email: Yup.string()
        .email("El email no es valido")
        .required("Ingrse el email"),
      telefono: Yup.string()
        .required("Ingrese el teléfono")
        .min(3, "Minimo 9 números"),
      contraseña: Yup.string().required("Ingrese la contraseña"),
      confirmarContraseña: Yup.string()
        .required("Confirme la contraseña")
        .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "30px" }}>
      {orderId ? (
        <>
          <Typography variant="h5" mt={2} sx={{ margin: 5 }}>
            Gracias por su compra, su numero de pedido es #{orderId}.
          </Typography>
          <Typography variant="h6" mt={2} sx={{ margin: 5 }}>
            Una persona de nuestro equipo se contactara con Usted para programar
            la entrega
          </Typography>
        </>
      ) : (
        <Box
          component="form"
          align="center"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <Typography variant="h6" mt={2} sx={{ margin: 5 }}>
              Para finalizar la compra complete los siguientes campos
            </Typography>
            <TextField
              variant="standard"
              multiline
              type="text"
              label="Nombre"
              onChange={handleChange}
              name="nombre"
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
            <TextField
              variant="standard"
              multiline
              type="text"
              label="Apellido"
              onChange={handleChange}
              name="apellido"
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              multiline
              type="text"
              label="Email"
              onChange={handleChange}
              name="email"
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              variant="standard"
              multiline
              type="text"
              label="Teléfono"
              onChange={handleChange}
              name="telefono"
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              multiline
              type="password"
              label="Contraseña"
              onChange={handleChange}
              name="contraseña"
              error={errors.contraseña ? true : false}
              helperText={errors.contraseña}
            />
            <TextField
              variant="standard"
              multiline
              type="password"
              label="Confirmar contraseña"
              onChange={handleChange}
              name="confirmarContraseña"
              error={errors.confirmarContraseña ? true : false}
              helperText={errors.confirmarContraseña}
            />
          </div>
          <div>
            <Button variant="contained" type="submit" sx={{ margin: 5 }}>
              enviar
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};
