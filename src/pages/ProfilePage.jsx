import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Stack,
  StepConnector,
  Typography,
} from "@mui/material";
import ImageShowcase from "../components/ImageShowcase";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <Navbar />
      <Container className="topMargin5">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Avatar
            alt="User"
            sx={{ width: 180, height: 180 }}
            src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <Typography variant="h3">User Name</Typography>
          <Typography variant="p">username@email.com</Typography>
        </Stack>
        <br />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => handleNavigation("/add-img")}
          >
            Add New Image
          </Button>
          <Button variant="contained" color="error">
            Delete Account
          </Button>
        </Stack>

        <StepConnector className="yMargin2" />

        <ImageShowcase />
      </Container>
    </>
  );
};

export default ProfilePage;