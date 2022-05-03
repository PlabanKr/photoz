import {
  Button,
  Card,
  CardActions,
  CardMedia,
  // Container,
  IconButton,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteImage } from "../services/database.api";

const ImageCard = ({ id, url, userID }) => {
  return (
    <Card>
      <CardMedia component="img" height="400" image={url} />
      <CardActions>
        {/* <IconButton size="small">
          <FavoriteIcon color="secondary" />
        </IconButton> */}
        <IconButton size="small" onClick={() => deleteImage(id)}>
          <DeleteIcon color="error" />
        </IconButton>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
