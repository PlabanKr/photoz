import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="400"
        image="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <CardActions>
        <IconButton size="small">
          <FavoriteIcon color="secondary" />
        </IconButton>
        <IconButton size="small">
          <DeleteIcon color="error" />
        </IconButton>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
