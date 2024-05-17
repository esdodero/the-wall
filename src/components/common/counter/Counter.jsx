import { Button, Stack } from "@mui/material";

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button onClick={restar} variant="outlined" size="small">
          -
        </Button>
        <h2>{contador}</h2>
        <Button onClick={sumar} variant="outlined" size="small">
          +
        </Button>
        <Button variant="contained" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </Stack>
    </div>
  );
};

export default Counter;
