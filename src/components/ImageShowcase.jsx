import { Grid } from "@mui/material";
import ImageCard from "../components/ImageCard";

const ImageShowcase = () => {
  const fakeData = ["a", "b", "c", "d", "e", "f"];
  return (
    <Grid container spacing={2}>
      {fakeData.map((data, index) => (
        <Grid item xs={12} md={6} key={index}>
          <ImageCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageShowcase;
