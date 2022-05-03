import { Grid } from "@mui/material";
import ImageCard from "../components/ImageCard";

const ImageShowcase = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((data, index) => {
        return (
          <Grid item xs={12} md={6} key={index}>
            <ImageCard id={data.$id} url={data.url} userID={data.user_id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ImageShowcase;
