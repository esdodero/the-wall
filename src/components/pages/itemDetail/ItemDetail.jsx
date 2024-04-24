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

const ItemDetail = ({ item }) => {
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
            <Button variant="outlined" size="small">
              30 x 45
            </Button>
            <Button variant="outlined" size="small">
              40 x 60
            </Button>
            <Button variant="contained" size="small">
              60 x 90
            </Button>
            <Button variant="outlined" size="small">
              80 x 120
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small">
              100 x 150
            </Button>
            <Button variant="outlined" size="small">
              120 x 180
            </Button>
          </Stack>

          <Typography mt={2} variant="h6" color="text.secondary">
            Marco
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small">
              Blanco
            </Button>
            <Button variant="outlined" size="small">
              Madera clara
            </Button>
            <Button variant="contained" size="small">
              Madera oscura
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small">
              Negro
            </Button>
            <Button variant="outlined" size="small">
              Solo print
            </Button>
          </Stack>

          <Typography mt={2} variant="body1" color="text.secondary">
            $ {item.price} .-
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
