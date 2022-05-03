import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { fetchAllImages } from "../services/database.api";
import ImageShowcase from "../components/ImageShowcase";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchAllImages()
      .then((r) => r.documents)
      .then((imgs) => {
        setImages([...imgs]);
      });
  }, [images]);

  return (
    <>
      <Navbar />
      <Container className="topMargin5">
        <ImageShowcase images={images} />
      </Container>
    </>
  );
};

export default HomePage;
