import { Container } from "@mui/material";
import ImageShowcase from "../components/ImageShowcase";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container className="topMargin5">
        <ImageShowcase />
      </Container>
    </>
  );
};

export default HomePage;
