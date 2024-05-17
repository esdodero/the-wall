import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "./ItemDetail.css";
import MoreProducts from "../../common/moreProducts/MoreProducts";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({
  item,
  onAdd,
  initial,
  tamanioVariant,
  marcoVariant,
  handleTamanioButtonClick,
  handleMarcoButtonClick,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <img
          srcSet={`${item.img}`}
          src={`${item.img}`}
          alt={item.title}
          loading="lazy"
          className="imageDetail"
        />
        <Typography
          className="textDetail"
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            "& > *": {
              mt: 1,
            },
            padding: "50",
          }}
        >
          <Typography gutterBottom variant="h3" mt={2}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artista {item.author}
          </Typography>
          <Typography mt={2} variant="h6" color="text.secondary">
            Tamaño
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant={tamanioVariant.small30x45}
              size="small"
              onClick={() => handleTamanioButtonClick("small30x45")}
            >
              30 x 45
            </Button>
            <Button
              variant={tamanioVariant.small40x60}
              size="small"
              onClick={() => handleTamanioButtonClick("small40x60")}
            >
              40 x 60
            </Button>
            <Button
              variant={tamanioVariant.small60x90}
              size="small"
              onClick={() => handleTamanioButtonClick("small60x90")}
            >
              60 x 90
            </Button>
            <Button
              variant={tamanioVariant.small80x120}
              size="small"
              onClick={() => handleTamanioButtonClick("small80x120")}
            >
              80 x 120
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant={tamanioVariant.small100x150}
              size="small"
              onClick={() => handleTamanioButtonClick("small100x150")}
            >
              100 x 150
            </Button>
            <Button
              variant={tamanioVariant.small120x180}
              size="small"
              onClick={() => handleTamanioButtonClick("small120x180")}
            >
              120 x 180
            </Button>
          </Stack>

          <Typography mt={2} variant="h6" color="text.secondary">
            Marco
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant={marcoVariant.white}
              size="small"
              onClick={() => handleMarcoButtonClick("white")}
            >
              Blanco
            </Button>
            <Button
              variant={marcoVariant.lightWood}
              size="small"
              onClick={() => handleMarcoButtonClick("lightWood")}
            >
              Madera clara
            </Button>
            <Button
              variant={marcoVariant.darkWood}
              size="small"
              onClick={() => handleMarcoButtonClick("darkWood")}
            >
              Madera oscura
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant={marcoVariant.black}
              size="small"
              onClick={() => handleMarcoButtonClick("black")}
            >
              Negro
            </Button>
            <Button
              variant={marcoVariant.printOnly}
              size="small"
              onClick={() => handleMarcoButtonClick("printOnly")}
            >
              Solo print
            </Button>
          </Stack>

          <Typography mt={2} variant="h4" color="text.secondary">
            $ {item.price} .-
          </Typography>
          <CounterContainer
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
