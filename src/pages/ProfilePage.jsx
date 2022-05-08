import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Stack,
  StepConnector,
  Typography,
} from "@mui/material";
import { account, avatar } from "../services/appwrite.config";
import { fetchImagesByUser } from "../services/database.api";
import ImageShowcase from "../components/ImageShowcase";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };

  const [userDetails, setUserDetails] = useState({});
  const [images, setImages] = useState([]);
  const [userAvatar, setUserAvatar] = useState();

  useEffect(() => {
    fetchImagesByUser(userDetails.$id)
      .then((r) => r.documents)
      .then((imgs) => {
        setImages([...imgs]);
      });
  }, [images, userDetails.$id]);

  const getUserData = async () => {
    try {
      const userData = await account.get();
      setUserDetails(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const getAvatar = async () => {
    let res = await avatar.getInitials();
    setUserAvatar(res.href);
  };

  useEffect(() => {
    getUserData();
    getAvatar();
  }, []);

  const deleteAccount = async () => {
    try {
      await account.delete();
      handleNavigation("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="topMargin5">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Avatar alt="User" sx={{ width: 180, height: 180 }} src={userAvatar} />
          <Typography variant="h3">{userDetails.name}</Typography>
          <Typography variant="p">{userDetails.email}</Typography>
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
          <Button variant="contained" color="error" onClick={deleteAccount}>
            Delete Account
          </Button>
        </Stack>

        <StepConnector className="yMargin2" />

        <ImageShowcase images={images} />
      </Container>
    </>
  );
};

export default ProfilePage;
